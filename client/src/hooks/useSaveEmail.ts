import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "./use-toast";

type Props = {
    onSuccess?: ((data: Response, variables: string, context: unknown) => Promise<unknown> | unknown) | undefined;
    onError?: ((error: Error, variables: string, context: unknown) => Promise<unknown> | unknown) | undefined
}

export const useSaveEmail = ({ onSuccess, onError }: Props) => {
    const subscription = useMutation({
        mutationFn: async (email: string) => {
            return apiRequest("POST", "/api/subscribe", { email });
        },
        onSuccess,
        onError,
    });

    return subscription
}