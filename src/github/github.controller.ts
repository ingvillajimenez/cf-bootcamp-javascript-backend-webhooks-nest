import { Body, Controller, Headers, Post } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Post('/')
  webhookHandler(
    @Headers('x-github-event') githubEvent: any,
    @Body() body: any,
  ) {
    console.log({ githubEvent });

    this.githubService.notify(`Event received: ${githubEvent}`);

    return { githubEvent };
  }
}
