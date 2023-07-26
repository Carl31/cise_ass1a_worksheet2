import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ARTICLES } from './dummydata/articles';
import { Param } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/articles')
  getAllArticles(): any[] {
    return ARTICLES;
  }

  @Get('api/articles/:id')
  getArticlesById(@Param('id') id: string): any[] {
    return ARTICLES.find((n) => n._id === id);
  }
}
