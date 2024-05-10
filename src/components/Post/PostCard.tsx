import { useState, useContext, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Collapse, Link, Skeleton, Stack } from '@mui/material';
import { toast } from 'react-toastify';
import { LargeAvatar, SmallAvatar } from 'src/components/Avatar';
import { IconButton } from 'src/components/IconButton';
import { InputField } from 'src/components/InputField';
import { H4Title, Paragraph2, Label, PreTitle } from 'src/components/Typography';
import { IPost, AuthContext } from 'src/contexts';
import { Comment } from './Comment';
import { Form } from 'src/components/Form';
import { PrimaryEditor } from 'src/components/TextEditor';
import { useGilder } from 'src/hooks/useGilder';
import { differenceDate } from 'src/helpers/date.helpers';
import { createCommentSchema } from 'src/schemas/create-comment.schema';
import { ipfsUrl } from 'src/helpers/ipfs.helpers';
import { avatarUrl } from 'src/constants/images.constants';
import { useCustomSWR } from 'src/hooks/useCustomSWR';
import { useDevice } from 'src/hooks/useDevice';
import { ErrorHandler } from 'src/helpers';
import { Dialog } from '../Dialog';

interface IPostCardProps {
	post: IPost;
	isShowForum?: boolean;
	isEditBtnShown?: boolean;
	openedCommentIndex?: string;
	onCommentToggle?: (index: string) => void;
}

export const PostCard = ({
	post,
	isShowForum = true,
	isEditBtnShown = false,
	openedCommentIndex,
	onCommentToggle
}: IPostCardProps) => {
	const commentRef = useRef<null | HTMLFormElement>(null);
	const { profile, isLoggedIn } = useContext(AuthContext);
	const { getAllCommunities } = useGilder();
	const { data: forums, isLoading } = useCustomSWR('getAllCommunities', getAllCommunities);
	const [isShowExpandableSection, setIsShowExpandableSection] = useState(false);
	const [isVoteSubmitting, setIsVoteSubmitting] = useState(false);
	const [isCommentSubmitting, setIsCommentSubmitting] = useState(false);
	const [isEditPostModalShown, setIsEditPostModalShown] = useState(false);

	const { iMd } = useDevice();

	const forum = forums?.find(forum => forum.idx === post.communityIdx);
	const { createComment, vote } = useGilder();

	useEffect(() => {
		setIsShowExpandableSection(openedCommentIndex === post.idx);
	}, [openedCommentIndex, post.idx]);

	const ForumAvatar = iMd ? LargeAvatar : SmallAvatar;

	const addComment = async (forumId: number, postId: number, content: string) => {
		if (!profile?.displayName) {
			toast.warning('You should have your own display name!', { theme: 'colored' });
			return;
		}
		setIsCommentSubmitting(true);
		try {
			await createComment(forumId, postId, content);
			commentRef.current?.reset();
		} catch (err) {
			ErrorHandler.process(err);
		}
		setIsCommentSubmitting(false);
	};

	const votePost = async (postId: number) => {
		if (!isLoggedIn) {
			toast.warning('You should login into platform!', { theme: 'colored' });
			return;
		}
		setIsVoteSubmitting(true);
		try {
			await vote(postId);
		} catch (err) {
			ErrorHandler.process(err);
		}
		setIsVoteSubmitting(false);
	};

	return (
		<Box
			sx={theme => ({
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				padding: theme.spacing(4),
				background: '#FFFFFF',
				borderRadius: 1.5
			})}
		>
			<Box
				sx={theme => ({
					display: 'grid',
					justifyContent: 'space-between',
					gap: 2,
					alignItems: 'center',
					marginBottom: { xs: 2, md: 3 },
					gridTemplateColumns: 'minmax(20px, auto) minmax(100px, auto)',
					[theme.breakpoints.down('md')]: {
						gridTemplateColumns: 'minmax(100px, 1fr)'
					}
				})}
			>
				<Box
					sx={theme => ({
						display: 'flex',
						alignItems: 'center',
						gap: 1.5,
						[theme.breakpoints.down('md')]: {
							justifyContent: 'space-between'
						}
					})}
				>
					{isShowForum &&
						(isLoading ? (
							<Stack direction="row" alignItems="center" spacing={1}>
								<Skeleton variant="circular" height={iMd ? 32 : 20} width={iMd ? 32 : 20} />
								<Skeleton variant="text" height={20} width={100} />
							</Stack>
						) : (
							<Box display="flex" alignItems="center" gap={2} overflow="hidden">
								<Link
									component={NavLink}
									to="/home"
									sx={{ overflow: 'hidden', display: 'flex', alignItems: 'center', gap: 1 }}
								>
									<LargeAvatar image="profile.png" />
									<Box display="flex" flexDirection="column">
										<Label noWrap>Junaid Mohamed</Label>
										<PreTitle>@junaidx7</PreTitle>
									</Box>
								</Link>
								{iMd && isEditBtnShown && <IconButton icon="edit" onClick={() => setIsEditPostModalShown(true)} />}
							</Box>
						))}
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, overflow: 'hidden' }}>
					<Paragraph2 color="text.secondary" whiteSpace="nowrap">
						Posted at
					</Paragraph2>
					<Paragraph2
						whiteSpace="nowrap"
						color="text.secondary"
						sx={theme => ({
							[theme.breakpoints.down('md')]: {
								marginLeft: 'auto'
							}
						})}
					>
						{differenceDate(Number(post.createdAt))}
					</Paragraph2>
					{!iMd && isEditBtnShown && <IconButton icon="edit" onClick={() => setIsEditPostModalShown(true)} />}
				</Box>
			</Box>
			<Link component={NavLink} to="/home">
				<H4Title sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>Lorem ipsum</H4Title>

				<PrimaryEditor
					readOnly
					readContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ultricies ligula, ut pellentesque tellus. Integer vitae aliquet nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur in porttitor leo. Sed efficitur ipsum mollis tincidunt cursus. Integer rutrum nunc quis turpis ullamcorper egestas. Fusce sit amet arcu nunc. Pellentesque pulvinar egestas purus. Vestibulum pharetra massa at orci imperdiet venenatis in in turpis. Donec iaculis dui at semper pellentesque. Quisque ut luctus orci. Vestibulum id facilisis sapien.

Quisque nibh nulla, tincidunt nec neque ut, efficitur tristique lorem. Ut eu faucibus ante, vel pharetra nulla. Proin id tristique tortor. Praesent ut finibus urna, at semper elit. Donec rhoncus blandit dolor id ullamcorper. In et blandit est, id tristique quam. Aliquam convallis eleifend nisl et suscipit. Pellentesque ante nisi, interdum vel ullamcorper tristique, tristique non tellus. Proin quis massa sed massa vulputate ullamcorper. Aenean faucibus placerat nulla, sit amet viverra ante tincidunt nec. Aliquam rhoncus, sapien quis accumsan interdum, elit ex suscipit orci, at pharetra urna ante faucibus enim. Sed vitae odio efficitur, laoreet augue et, ultricies sem.

Nunc nec hendrerit odio. Phasellus orci enim, porttitor nec justo in, mattis porttitor dui. Sed sodales ac nisl a pretium. Aenean placerat sapien accumsan, elementum mi ut, dignissim leo. Aenean mi lacus, egestas vitae convallis ullamcorper, egestas sed nulla. Aliquam consectetur massa sapien. Cras et eleifend nibh. Donec porta ornare nisi"
					post={post}
				/>
			</Link>

			<Box sx={{ display: 'flex', alignItems: 'center', gap: 5, mt: 2.5 }}>
				<IconButton icon="comment" size="medium" label="122" />
				<IconButton icon="like" size="medium" label="238" />
				<IconButton icon="repeat" size="medium" label="425" />
			</Box>

			<Collapse in={isShowExpandableSection}>
				<>
					{isLoggedIn && (
						<Box sx={{ mt: 3 }}>
							<Form
								action={data => addComment(Number(post.communityIdx), Number(post.idx), data.comment)}
								defaultValues={{
									comment: ''
								}}
								myRef={commentRef}
								schema={createCommentSchema}
							>
								<InputField
									type="text"
									name="comment"
									multiline
									maxMultilineRows={4}
									disabled={isCommentSubmitting}
									placeholder="Add comment..."
									isAdornmentCentered={false}
									startElement={<LargeAvatar image={ipfsUrl(profile?.avatar || avatarUrl)} />}
									endElement={
										<IconButton
											sx={{ mt: 0.625 }}
											icon="send"
											loading={isCommentSubmitting}
											onClick={() =>
												commentRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
											}
										/>
									}
								/>
							</Form>
						</Box>
					)}
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 1.5 }}>
						{post.comments?.map(comment => (
							<Comment key={comment.idx} comment={comment} communityIdx={post.communityIdx} />
						))}
					</Box>
				</>
			</Collapse>

			<Dialog title="Edit post" nofooter open={isEditPostModalShown} onClose={() => setIsEditPostModalShown(false)}>
				<PrimaryEditor
					title={post.title}
					content={post.message}
					post={post}
					communityIndex={Number(post.communityIdx)}
					isSaveDraftBtnShown={false}
					onClose={() => setIsEditPostModalShown(false)}
				/>
			</Dialog>
		</Box>
	);
};
