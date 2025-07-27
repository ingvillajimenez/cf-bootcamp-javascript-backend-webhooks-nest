import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubService {
  private readonly discordWebhookUrl =
    'https://discord.com/api/webhooks/1398838020203085885/RzWGQDyukTjXRMwBV4L3jJd41nh3NqXqLZ-FgiE23yy3kVXpmreq68aY0j4QI6zM0b1d';

  async notify(message: string) {
    const body = {
      content: message,
    };

    const resp = await fetch(this.discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      console.log('Error sending message to discord');
      return false;
    }

    return true;
  }
}
