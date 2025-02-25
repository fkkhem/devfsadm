import blog_img from '../assets/img/blog.jpg';
import { img_base_url, mine } from './Config';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Solaris Administration Essentials: A Quick Guide',
    img: blog_img,
    href: '/blog/solaris',
    description:
      "Solaris administration involves the management, configuration, and maintenance of Solaris-based systems, ensuring their smooth operation and optimal performance. Whether you're a seasoned system administrator or just starting out, mastering Solaris administration is crucial for effectively managing enterprise-grade systems. In this blog, we'll cover some essential aspects of Solaris administration to help you kickstart your journey.",
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    category: { title: 'Administration', href: '/course/solaris' },
    author: {
      name: '0',
      role: 'Co-Founder / CEO',
      href: '/profile/jay',
      imageUrl: mine,
    },
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    img: blog_img,
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: mine,
    },
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    img: blog_img,
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: mine,
    },
  },
  {
    id: 4,
    title: 'Boost your conversion rate',
    img: blog_img,
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: mine,
    },
  },
  {
    id: 5,
    title: 'Boost your conversion rate',
    img: blog_img,
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: mine,
    },
  },
  {
    id: 6,
    title: 'Boost your conversion rate',
    img: blog_img,
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: mine,
    },
  },
];

export default function BlogSection() {
  return (
    <div className=" py-24 sm:py-32 dark:bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl text-violet-500 dark:text-white font-bold tracking-tight sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <img src={post.img} alt='' className='my-3' />
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-blue-400">
                  {post.date}
                </time>
                <Link
                  to={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-100"
                >
                  {post.category.title}
                </Link>
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-blue-900 group-hover:text-gray-600">
                  <Link to={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 text-gray-700 dark:text-white line-clamp-3 text-sm leading-6 ">{post.description}</p>
              </div>
              <div className="relative mt-3 flex items-center gap-x-6 bg-white px-2 py-1 rounded-full w-full">
                <img src={`${img_base_url}${post.author.imageUrl}`} alt="" className="h-16 w-16 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <Link to={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </Link>
                  </p>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};  