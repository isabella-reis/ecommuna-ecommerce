"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { columns } from "./columns";
import { BillboardColumn } from "./columns";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";


interface IBillboardClientProps {
    data: BillboardColumn[]
}

export const BillboardClient = ({data}: IBillboardClientProps) => {
    const router = useRouter();
    const params = useParams();

    return(
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Billboards (${data.length})`}
                    description="Gerencie billboards para sua loja."
                />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Adicione um novo
                </Button>
            </div>
            <Separator/>
            <DataTable columns={columns} data={data}/>
        </>
    )
}