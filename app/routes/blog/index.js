import Route from '@ember/routing/route';
import asyncForEach from 'ember-async-await-for-each';
import fetch from 'fetch';

export default class Index extends Route {
  async model() {
    let authors = await fetch('/authors/authors.json');
    authors = await authors.json();
    authors = authors.data;

    let posts = await fetch('/posts/posts.json');
    posts = await posts.json();
    posts = posts.data;

    await asyncForEach(posts, async (post) => {
      post.author = await authors.find((author) => {
        return author.id === post.attributes.authorId;
      });
    });

    return posts;
  }

  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('page', 1);
    }
  }
}
