import { Component, OnInit } from '@angular/core';
import { VideoSDKMeeting } from '@videosdk.live/js-prebuilt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  async getToken() {
    const ENDPOINT = 'http://192.168.0.81:9000/'; // localhost:9000
    try {
      const response = await fetch(`${ENDPOINT}get-token`, {
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
      const VIDEOSDK_API_ENDPOINT = `https://api.zujonow.com/v1/meetings`;
      const options = {
        method: 'POST',
        headers: {
          Authorization: token,
        },
      };
      const response = await fetch(VIDEOSDK_API_ENDPOINT, options)
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
      };
      const videoMeeting = new VideoSDKMeeting();

      await videoMeeting.init(videoMeetingSpecs);
    }
  }
}
