"use client";

import { useSectionInView } from "@/lib/hooks";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { sendMail } from "@/app/actions";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import { emailRegex, validateString } from "@/lib/utils";

const ContactSection = () => {
  const { ref } = useSectionInView("/#contact", 0.5);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const message = formData.get("message");

    if (!validateString(email, 500) || !emailRegex.test(email)) {
      return toast({
        variant: "destructive",
        description: "Please enter a valid email.",
      });
    }

    if (!validateString(message, 5000)) {
      return toast({
        variant: "destructive",
        description: "Please enter a valid message.",
      });
    }

    const response = await sendMail(formData);

    if (!response.success) {
      setLoading(false);
      return toast({
        variant: "destructive",
        description: response.message,
      });
    }

    e.target.reset();
    setLoading(false);
    toast({ description: `${response.message}!` });
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      // viewport={{ once: true }}
      ref={ref}
      id="contact"
      className="scroll-mt-28"
    >
      <div className="mb-7 text-center">
        <h2 className="text-2xl capitalize">Send Me a Message</h2>
        <p className="body-text mt-2 leading-tight">
          Please contact me directly at{" "}
          <a
            href="mailto:devbyjacobs@gmail.com"
            className="underline transition-colors hover:text-foreground"
          >
            devbyjacobs@gmail.com
          </a>{" "}
          or use this form.
        </p>
      </div>

      <form onSubmit={submit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Input required type="email" name="email" placeholder="Email" />
          <Textarea
            required
            rows={6}
            name="message"
            placeholder="Type your message here."
            className="resize-none"
          />
        </div>
        <motion.div
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.975 }}
          className="flex w-full justify-center"
        >
          <Button
            id="contact-form-submit-bttn"
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading && <Loader2Icon className="animate-spin" />}
            {loading ? "Please wait" : "Send"}
          </Button>
        </motion.div>
      </form>
    </motion.section>
  );
};
export default ContactSection;
