import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UserPost } from './schemas/post.schema';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto): Promise<UserPost> {
    return this.postsService.createPost(createPostDto);
  }

  @Get()
  async getAllPosts(): Promise<UserPost[]> {
    return this.postsService.findAllPosts();
  }

  @Get(':id')
  async getOnePost(@Param('id') id: string): Promise<UserPost> {
    return this.postsService.findOnePost(id);
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<UserPost> {
    return this.postsService.updatePost(id, updatePostDto);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<void> {
    return this.postsService.deletePost(id);
  }
}
