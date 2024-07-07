import { NextRequest, NextResponse } from "next/server";

const whitelist = [
    '52.31.139.75',
    '52.49.173.169',
    '52.214.14.220'
]

export async function POST (request: NextRequest, response: NextResponse) {
    try {
        const body = await request.json();
        const jsonData = JSON.parse(body);

        //validate event
        const requestIpAddress = request.ip ?? request.headers.get('X-Forwarded-For')

        if(!whitelist.includes(requestIpAddress as string)) {
            return NextResponse.json({ error: 'Invalid IP' }, { status: 400 })
        }

        NextResponse.json({ message: 'success' }, { status: 200 })

        if (body?.event === 'transfer.failed') {
            // later: handle failed transfer
        }

        if (body?.event === 'charge.success') {
            // later: handle success charge
        }

        
    } catch (e: any) {
        return NextResponse.json({message: e?.message},{ status: 400 })
    }
}