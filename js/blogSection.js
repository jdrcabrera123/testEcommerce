// Define an array to store blog posts
const blogPosts = [
  {
    title: "Embracing AI in the Face of Skepticism: A Guide for Organizations",
    date: "12 Feb 2024",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.",
    imageSrc: "img/img1.jpg",
    customLink:
      "https://start.docuware.com/blog/document-management/embracing-ai-in-the-face-of-skepticism-a-guide-for-organizations",
  },

  {
    title: "How to Leverage AI and Machine Learning for Your Business",
    date: "14 Feb 2024",
    description:
      "Another description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.",
    imageSrc: "img/img8.jpg",
    customLink:
      "https://start.docuware.com/blog/document-management/how-to-leverage-ai-and-machine-learning-for-your-business",
  },
  {
    title: "Cyberattacks: How You Can Protect Your Company",
    date: "14 Mar 2024",
    description:
      "Another description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.",
    imageSrc: "img/img7.jpg",
    customLink:
      "https://start.docuware.com/blog/document-management/cyberattacks-how-you-can-protect-your-company",
  },
  {
    title: "How Digital Tools Increase Employee Engagement",
    date: "18 Mar 2024",
    description:
      "Another description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.",
    imageSrc: "img/img5.jpg",
    customLink:
      "https://start.docuware.com/blog/document-management/how-digital-tools-increase-employee-engagement",
  },
];

// Select the blog section
const blogSection = document.querySelector(".blogSection");

// Loop through the blog posts array and create HTML for each post
blogPosts.forEach((post) => {
  // Create post box element
  const postBox = document.createElement("div");
  postBox.classList.add("post-box");

  // Create post image element
  const postImg = document.createElement("img");
  postImg.classList.add("post-img");
  postImg.src = post.imageSrc;
  postImg.alt = "Post Image";
  postBox.appendChild(postImg);

  // Create post title element
  const postTitle = document.createElement("a");
  postTitle.classList.add("post-title");
  postTitle.href = post.customLink;
  postTitle.textContent = post.title;
  postTitle.target = "_blank";
  postBox.appendChild(postTitle);

  // Create post date element
  const postDate = document.createElement("span");
  postDate.classList.add("post-date");
  postDate.textContent = post.date;
  postBox.appendChild(postDate);

  // Create post description element
  const postDescription = document.createElement("p");
  postDescription.classList.add("post-description");
  postDescription.textContent = post.description;
  postBox.appendChild(postDescription);

  // Append post box to blog section
  blogSection.appendChild(postBox);
});
