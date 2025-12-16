import { toast as sonnerToast } from "sonner";

interface ToastOptions {
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

function toast({ title, description, action }: ToastOptions) {
  const toastId = sonnerToast(title || description, {
    description: title ? description : undefined,
    action: action ? {
      label: action.label,
      onClick: action.onClick,
    } : undefined,
  });

  return {
    id: toastId,
    dismiss: () => sonnerToast.dismiss(toastId),
    update: ({ title: newTitle, description: newDescription }: Partial<ToastOptions>) => {
      // Sonner doesn't support updating toasts, so we'll dismiss and create a new one
      sonnerToast.dismiss(toastId);
      return toast({ title: newTitle || title, description: newDescription || description, action });
    },
  };
}

// Enhanced toast variants
toast.success = (message: string, options?: Omit<ToastOptions, 'title'>) => {
  const toastId = sonnerToast.success(message, {
    description: options?.description,
    action: options?.action ? {
      label: options.action.label,
      onClick: options.action.onClick,
    } : undefined,
  });

  return {
    id: toastId,
    dismiss: () => sonnerToast.dismiss(toastId),
  };
};

toast.error = (message: string, options?: Omit<ToastOptions, 'title'>) => {
  const toastId = sonnerToast.error(message, {
    description: options?.description,
    action: options?.action ? {
      label: options.action.label,
      onClick: options.action.onClick,
    } : undefined,
  });

  return {
    id: toastId,
    dismiss: () => sonnerToast.dismiss(toastId),
  };
};

toast.warning = (message: string, options?: Omit<ToastOptions, 'title'>) => {
  const toastId = sonnerToast.warning(message, {
    description: options?.description,
    action: options?.action ? {
      label: options.action.label,
      onClick: options.action.onClick,
    } : undefined,
  });

  return {
    id: toastId,
    dismiss: () => sonnerToast.dismiss(toastId),
  };
};

toast.info = (message: string, options?: Omit<ToastOptions, 'title'>) => {
  const toastId = sonnerToast.info(message, {
    description: options?.description,
    action: options?.action ? {
      label: options.action.label,
      onClick: options.action.onClick,
    } : undefined,
  });

  return {
    id: toastId,
    dismiss: () => sonnerToast.dismiss(toastId),
  };
};

toast.loading = (message: string, options?: Omit<ToastOptions, 'title'>) => {
  const toastId = sonnerToast.loading(message, {
    description: options?.description,
  });

  return {
    id: toastId,
    dismiss: () => sonnerToast.dismiss(toastId),
  };
};

function useToast() {
  return {
    toast,
    dismiss: (toastId?: string | number) => {
      if (toastId) {
        sonnerToast.dismiss(toastId);
      } else {
        sonnerToast.dismiss();
      }
    },
  };
}

export { useToast, toast };
