import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserPost } from './schemas/post.schema';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(UserPost.name) private postModel: Model<UserPost>) {}

  async createPost(createPostDto: CreatePostDto): Promise<UserPost> {
    const createdPost = new this.postModel(createPostDto);
    return await createdPost.save();
  }

  async findAllPosts(): Promise<UserPost[]> {
    return this.postModel.find().exec();
  }

  async findOnePost(id: string): Promise<UserPost> {
    return this.postModel.findById(id).exec();
  }

  async updatePost(
    id: string,
    updatePostDto: UpdatePostDto,
  ): Promise<UserPost> {
    return this.postModel
      .findByIdAndUpdate(id, updatePostDto, { new: true })
      .exec();
  }

  async deletePost(id: string): Promise<void> {
    await this.postModel.findByIdAndDelete(id).exec();
  }
}
