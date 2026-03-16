

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-postdetailspage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postdetailspage.html',
  styleUrl: './postdetailspage.scss',
})
export class Postdetailspage {

  postData = {
    breadcrumb: ["Home", "Technology", "First Post Details"],

    title: "First Post Details",

    author: {
      name: "John Smith",
      bio: "AI Researcher & Tech Blogger",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-0_aoFhFIjUbUCLoro0E9650wxJrVfkS0Q&s"
    },

    postInfo: {
      published: "Published: 1/3/26",
      updated: "Updated: 10/6/26",
      readTime: "6 min read"
    },

    featuredImage:
      "https://optinmonster.com/wp-content/uploads/2025/01/how-to-write-a-blog-feature.png",

    article: [
      {
        heading: "Importance of SEO in Blogging",
        paragraph:
          "Search Engine Optimization (SEO) plays a major role in generating traffic for blog posts. Around 50–60% of website traffic typically comes from organic search results.Blogging has become one of the most powerful ways to share knowledge, promote businesses, and build an online presence. However, simply writing a blog post is not enough. Millions of blog posts are published every day, making it difficult for content to reach the right audience. This is where Search Engine Optimization (SEO) plays a crucial role. SEO helps bloggers improve their visibility in search engines, attract organic traffic, and grow their audience."
      },
      {
        heading: "Benefits of Consistent Blogging",
        paragraph:
          "Businesses that maintain an active blog often experience stronger online visibility and higher customer engagement. Blogging has become an essential part of digital marketing and online communication. However, writing a blog occasionally may not bring significant results. Consistent blogging plays a vital role in building a strong online presence and attracting a loyal audience. By publishing content regularly, bloggers and businesses can improve visibility, increase engagement, and strengthen their authority in their niche."
      }
    ],

    tags: ["AI", "Technology", "FutureTech"],

    comments: [
      {
        user: "Rahul",
        time: "2 hours ago",
        avatar:
          "https://sadgirldp.com/wp-content/uploads/Instagram-Cartoon-Boys-Profile-Pictures.jpeg",
        text: "Great article! Really helpful explanation.",
        likes: 5,
        // dislikes:2,
        replies: [
          {
            user: "Anita",
            time: "1 hour ago",
            avatar:
              "https://img.freepik.com/premium-photo/cartoon-girl-with-long-black-hair-wearing-blue-dress-sneakers_1034043-113815.jpg",
            text: "I agree with this point!",
            likes: 2,
            // dislikes:1,
          }
        ]
      }
    ]
  };

}