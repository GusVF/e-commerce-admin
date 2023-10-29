import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function DELETE (
  _req: Request,
  { params }: { params: { storeId: string }}
) {
  try {
    const { userId } = auth();

    if(!userId) {
      return new NextResponse("Authenticated", { status: 401 });
    }

    if(!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const store = await prismadb.store.deleteMany({
      where: {
        id: params.storeId,
        userId
      }
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORE_DELETE]', error);
    return new NextResponse("Internal error", { status: 500 })
  }
}