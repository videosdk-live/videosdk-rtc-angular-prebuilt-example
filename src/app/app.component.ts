import { Component, OnInit } from '@angular/core';
import { VideoSDKMeeting } from '@videosdk.live/rtc-js-prebuilt';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  async ngOnInit() {
    const apiKey = environment.VIDEOSDK_API_KEY;
    const meetingId = 'milkyway';
    const name = 'Demo User';

    const config = {
      name: name,
      meetingId: meetingId,
      apiKey: apiKey,

      containerId: null,
      redirectOnLeave: 'https://www.videosdk.live/',

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,

      chatEnabled: true,
      screenShareEnabled: true,
      pollEnabled: true,
      whiteBoardEnabled: true,
      raiseHandEnabled: true,

      recordingEnabled: true,
      recordingEnabledByDefault: false,
      recordingWebhookUrl: 'https://www.videosdk.live/callback',
      participantCanToggleRecording: true,

      brandingEnabled: true,
      brandLogoURL: 'https://picsum.photos/200',
      brandName: 'Awesome startup',

      participantCanLeave: true, // if false, leave button won't be visible

      livestream: {
        autoStart: true,
        outputs: [
          // {
          //   url: "rtmp://x.rtmp.youtube.com/live2",
          //   streamKey: "<STREAM KEY FROM YOUTUBE>",
          // },
        ],
      },

      permissions: {
        askToJoin: false, // Ask joined participants for entry in meeting
        toggleParticipantMic: true, // Can toggle other participant's mic
        toggleParticipantWebcam: true, // Can toggle other participant's webcam
      },
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  }
}
