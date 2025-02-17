import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

import {
  firaSansBold,
  firaSansLight,
  firaSansRegular,
  firaSansSemibold,
} from "@/lib/helpers/inter";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const firaSansSemiboldData = await firaSansSemibold;
  const firaSansBoldData = await firaSansBold;
  const firaSansRegularData = await firaSansRegular;
  const firaSansLightData = await firaSansLight;
  const title = searchParams.get("title") ?? "Sample Title";
  const desc = searchParams.get("desc") ?? "Sample Description";
  const siteName = searchParams.get("siteName") ?? "bigpod.si";
  const imgUrl =
    searchParams.get("imgUrl") ??
    "https://og.bigpod.si/bigpod-head.jpg";
  return new ImageResponse(
    (
      <div tw="bg-zinc-800 w-full h-full flex flex-col">
        <div tw="w-full h-10/12 flex items-center justify-between px-24 text-white">
          <div tw="flex flex-col">
          <div tw="flex flex-col max-w-2xl">

            <h1 tw="text-6xl" style={{ fontFamily: "FiraSans-Bold" }}>
              {title}
            </h1>
            </div>
            <div tw="flex flex-col max-w-2xl">
            <h4 tw="text-4xl mt-8" style={{ fontFamily: "FiraSans-Light" }}>
              {desc}
            </h4>
            </div>
          </div>
          <figure tw="bg-zinc-600 rounded-full">
            <img
              src={imgUrl}
              alt="og-image"
              width="256"
              height="256"
              style={{
                borderRadius: 100,
              }}
            />
          </figure>
        </div>
        <div tw="w-full h-1/6 px-24 flex items-center justify-between text-white">
          <p tw="font-bold text-xl" style={{ fontFamily: "FiraSans-Medium" }}>
            {siteName}
          </p>
          <p
            tw="font-medium text-xl"
            style={{ fontFamily: "FiraSans-Regular" }}
          >
            Twitter: @bigpod98
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "FiraSans-Light",
          data: firaSansLightData,
          weight: 400,
        },
        {
          name: "FiraSans-Regular",
          data: firaSansRegularData,
          weight: 500,
        },
        {
          name: "FiraSans-Medium",
          data: firaSansSemiboldData,
          weight: 600,
        },
        {
          name: "FiraSans-Bold",
          data: firaSansBoldData,
          weight: 800,
        },
      ],
    }
  );
}
