# Video SDK No Code Prebuilt App for Angular

## What is it?

This code sample demonstrates a one-to-one and group video call application built with [Video SDK RTC Prebuilt SDK](https://docs.videosdk.live/docs/realtime-communication/sdk-reference/prebuilt-sdk-js/setup) and [Video SDK RTC JS SDK](https://docs.videosdk.live/docs/realtime-communication/sdk-reference/javascript-sdk/setup)

- Built for serverless video calling experience.
- Scale it upto 5,000 participants with low code.
- 10,000 minutes free on monthly basis.
- Inbuilt video and audio quality optimization.
- Inbuilt chat poll, whiteboard, Q and A support.

![Video API example](https://raw.githubusercontent.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example/master/public/prebuilt.jpg)

## Features

- [x] Completely Low code and serverless.
- [x] Video API with real-time audio, video and data streams
- [x] 5,000+ participants support
- [x] Chat support with rich media.
- [x] Screen sharing with HD and Full HD.
- [x] Play realtime video in meeting
- [x] Connect it with social media such as Facebook, Youtube etc (RTMP out support).
- [x] Intelligent speaker switch
- [x] Record your meetings on cloud
- [x] Inbuilt support of whiteboard, poll and Q & A.
- [x] Customize UI as per your needs.

## Browser Support

Visit our official guide for [Browser Support](https://docs.videosdk.live/docs/realtime-communication/see-also/device-browser-support)

## Prerequisites

- node
- npm

## Getting started

1. In a separate folder, clone the repo

   ```sh
   $ git clone https://github.com/videosdk-live/videosdk-rtc-angular-prebuilt-example
   $ cd videosdk-rtc-angular-prebuilt-example
   ```

2. Update api key generated from [app.videosdk.live](https://app.videosdk.live/settings/api-keys) in `src/environment.ts`.

   ```typescript
   export const environment = {
     production: false,
     apiKey: "<API KEY>",
   };
   ```

3. (optional) You can also change meetingId and name of participant in `app.component.ts`.

   ```typescript
   //...

   const meetingId = "milkyway";
   const name = "Demo User";

   //...
   ```

4. Install NPM packages

   ```sh
   $ npm install
   ```

5. Run the client

   ```sh
   $ npm run start
   ```

## Resources

Visit, [https://www.videosdk.live/](https://www.videosdk.live/) to generate API key and secret.
