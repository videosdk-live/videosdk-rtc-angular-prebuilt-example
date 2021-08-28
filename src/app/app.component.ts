import { Component, OnInit } from '@angular/core';
import { VideoSDKMeeting } from '@videosdk.live/rtc-js-prebuilt';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  async getToken() {
    try {
      const response = await fetch(`${environment.apiUrl}/get-token`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const { token } = await response.json();
      return token;
    } catch (e) {
      console.log(e);
    }
  }
  async getMeetingId(token: any) {
    try {
      const apiUrl = `${environment.apiUrl}/create-meeting`;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      };
      const response = await fetch(apiUrl, options)
        .then(async (result) => {
          const { meetingId } = await result.json();
          return meetingId;
        })
        .catch((error) => console.log('error', error));
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async ngOnInit() {
    const token = await this.getToken();
    const meetingId = await this.getMeetingId(token);
    if (meetingId) {
      let name = 'Demo User';
      const videoMeetingSpecs = {
        micEnabled: true,
        webcamEnabled: true,
        name,
        meetingId,
        redirectOnLeave: window.location.href,
        chatEnabled: true,
        screenShareEnabled: true,
        pollEnabled: true,
        whiteBoardEnabled: true,
        participantCanToggleSelfWebcam: true,
        participantCanToggleSelfMic: true,
        raiseHandEnabled: true,
        token: token,
        containerId: null,
        recordingEnabled: true,
        recordingWebhookUrl: 'https://www.videosdk.live/callback',
        recordingEnabledByDefault: false,
        participantCanToggleRecording: true,
        brandingEnabled: true,
        brandLogoURL:
          'https://app.videosdk.live/_next/image?url=%2Fvideosdk_logo_circle.png&w=1920&q=75',
        brandName: 'VIDEO SDK LIVE',

        participantCanLeave: true, // if false, leave button won't be visible

        // Live stream meeting to youtube
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
      const videoMeeting = new VideoSDKMeeting();

      await videoMeeting.init(videoMeetingSpecs);
    }
  }
}
