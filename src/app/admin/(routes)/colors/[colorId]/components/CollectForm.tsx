"use client";

import axios from "axios";
import * as z from "zod";
import { Heading } from "@/components/ui/heading";
import { Collect } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import AlertModal from "@/components/alert-modal";
import { Trash } from "lucide-react";
import ImageUpload from "@/components/ui/image-upload";
import { toast } from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1),
  image: z.string().min(1),
});

type CollectFormValues = z.infer<typeof formSchema>;
interface CollectFormProps {
  initialData: Collect | null;
}

const CollectForm: React.FC<CollectFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit collection" : "Create collection";
  const description = initialData
    ? "Edit a collection."
    : "Add a new collection";
  const toastMsg = initialData ? "Collection updated" : "Collection created";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<CollectFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      image: "",
    },
  });

  const onSubmit = async (data: CollectFormValues) => {
    console.log("hello");
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(`/api/admin/collects/${params.collectId}`, data);
      } else {
        await axios.post(`/api/admin/collects`, data);
      }
      router.refresh();
      router.push(`/admin/collects`);
      toast.success(toastMsg);
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/admin/collects/${params.collectId}`);
      router.refresh();
      router.push(`/admin/collects`);
      toast.success("Collection deleted.");
    } catch (error: any) {
      toast.error(
        "Make sure you removed all products inside this collection first."
      );
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background Image</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    disabled={loading}
                    onChange={(url) => field.onChange(url)}
                    onRemove={() => field.onChange("")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Type" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default CollectForm;
