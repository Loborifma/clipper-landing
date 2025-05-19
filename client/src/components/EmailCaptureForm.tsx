import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type EmailFormProps = {
  buttonText?: string;
  buttonClassName?: string;
  inputClassName?: string;
  formClassName?: string;
};

export default function EmailCaptureForm({
  buttonText = "I'll Follow",
  buttonClassName = "bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white font-semibold px-6 py-3 rounded-lg",
  inputClassName = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
  formClassName = "flex flex-col sm:flex-row gap-3 w-full max-w-md",
}: EmailFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const subscription = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/subscribe", { email });
    },
    onSuccess: () => {
      toast({
        title: "Отлично!",
        description: "Спасибо за ваш интерес! Мы будем держать вас в курсе.",
        duration: 5000,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Что-то пошло не так",
        description: error.message || "Пожалуйста попробуйте позже",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    subscription.mutate(values.email);
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={formClassName}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  placeholder="Ваш email"
                  className={inputClassName}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs mt-1" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className={buttonClassName}
          disabled={isSubmitting || subscription.isPending}
        >
          {isSubmitting || subscription.isPending ? "Отправка..." : buttonText}
        </Button>
      </form>
    </Form>
  );
}
