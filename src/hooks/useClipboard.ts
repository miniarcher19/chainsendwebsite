import { useState } from 'react';
import { toast } from 'react-toastify';

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success

export const useClipboard = () => {
	const [copiedText, setCopiedText] = useState<CopiedValue>(null);

	const copy: CopyFn = async text => {
		if (!navigator?.clipboard) {
			console.warn('Clipboard not supported');
			return false;
		}

		// Try to save to clipboard then save it in the state if worked
		try {
			toast.dismiss();

			await navigator.clipboard.writeText(text);
			setCopiedText(text);

			toast.success('Copied!', { theme: 'colored' });

			return true;
		} catch (error) {
			console.warn('Copy failed', error);
			setCopiedText(null);
			return false;
		}
	};

	return { copiedText, copy };
};
