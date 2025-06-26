
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

import { toast } from 'sonner';

interface ComponentCardProps {
  title: string;
  description: string;
  imageUrl: string;
  codeSnippet: string;
  username: string;
  repo: string;
}

export default function ComponentCard({ title, description, imageUrl, codeSnippet, username, repo}: ComponentCardProps) {

  const handleCopyLink = async () => {    try {
      const formattedCode = codeSnippet.replace(/\{username\}/g, username).replace(/\{repo\}/g, repo);
      await navigator.clipboard.writeText(formattedCode);
      toast(
        `Copied to clipboard!, ${title} code has been copied to your clipboard.`,
      );
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      toast(
        "Failed to copy, Please try again.",
      );
    }
  };

  const finalImageUrl = imageUrl.replace(/\{username\}/g, username).replace(/\{repo\}/g, repo);
  return (
    <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-lg opacity-90 group transform-gpu transition-all duration-200 ease-out delay-100 hover:-translate-y-2 hover:scale-[1.04] shadow-md hover:shadow-2xl hover:shadow-purple-500/40 hover:opacity-100 hover:border-purple-600 cursor-pointer max-w-sm">
      <div className="aspect-video bg-muted flex items-center justify-center p-4">
        <img
          src={finalImageUrl}
          alt={title}
          className="max-w-full max-h-full object-contain rounded"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button
          onClick={handleCopyLink}
          className="w-full bg-primary hover:bg-primary/60 text-primary-foreground transform-gpu transition-transform duration-200 ease-out delay-75 hover:-translate-y-0.5 hover:scale-[1.03]"
        >
          <Copy className="w-4 h-4 mr-2" />
          Copy Code
        </Button>
      </div>
    </div>
  );
};

