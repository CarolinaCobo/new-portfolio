import blogData from "./BlogData";

const posts = blogData;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function blog() {
  return (
    <div
      id="articles-section"
      className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className="relative max-w-lg mx-auto lg:max-w-7xl">
        <div className="text-left">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Articles
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4 max-w-2xl">
            Watch this space for more articles about tech, career change and
            other interesting topics
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href={post.category.href} className="inline-block">
                  <span
                    className={classNames(
                      post.category.color,
                      "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                    )}
                  >
                    {post.category.name}
                  </span>
                </a>
              </div>
              <a href={post.href} className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readingTime} read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
