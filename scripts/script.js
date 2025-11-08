// Notice Runner
const getNotice = async () => {
  const res = await fetch("./public/notice.json");
  const data = await res.json();
  display(data.notices);
};

const noticeRunner = document.getElementById("noticeRunner");
const noticeContainer = document.getElementById("noticeContainer");
const display = (notices) => {
  if (notices.length !== 0) {
    noticeRunner.innerHTML += `
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="inline mx-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
                ></path>
              </svg>
        `;
  }
  for (const notice of notices) {
    noticeRunner.innerHTML += `
            <h2>${notice.title}</h2>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="inline mx-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
                ></path>
              </svg>
        `;
    noticeContainer.innerHTML += `
            <div
                class="notice bg-white flex p-3 text-sm sm:text-base md:text-[17px] text-[#013223] shadow-[0_2px_3px_0_rgba(0,0,0,0.15)] rounded-md"
              >
                <div
                  class="mr-2 border-r-2 border-[#013223] pr-2 font-bold text-xs sm:text-sm md:text-base text-center"
                >
                  <h2>${notice.date}</h2>
                  <h2>${notice.month}</h2>
                </div>
                <div class="content-center font-medium">
                  <h2>${notice.title}</h2>
                </div>
              </div>
        `;
  }
};


const getChairman =async () => {
    const res = await fetch('./public/notice.json');
    const data = await res.json();
    displayChairman(data.chairman);
}

const displayChairman = (chairman) => {
    document.getElementById("chairmanImage").src=`${chairman.image}`;
    document.getElementById("chairmanName").innerText = `${chairman.name}`;
}
const getPrincipal =async () => {
    const res = await fetch('./public/notice.json');
    const data = await res.json();
    displayPrincipal(data.principal);
}

const displayPrincipal = (principal) => {
    document.getElementById("principalImage").src=`${principal.image}`;
    document.getElementById("principalName").innerText = `${principal.name}`;
}
document.getElementById("chairmanMessage").innerText = `It is a matter of great pride and satisfaction for me to be associated with Moragacha Secondary School, an institution that has been serving the noble cause of education with dedication and sincerity. From its very beginning, our school has carried the vision of spreading knowledge, discipline, and moral values among the young generation, and I am delighted to see how this vision is being translated into reality through the hard work of our teachers and the achievements of our students.

In this age of globalization and rapid technological progress, education has become more than just learning from books. It is about preparing our students to think critically, solve problems, and face real-life challenges with confidence and courage. Our mission is to create an atmosphere where learners can explore their talents, develop leadership qualities, and grow into responsible citizens who will contribute positively to our nation and the world.

I firmly believe that the success of our school lies in the combined efforts of our teachers, students, guardians, and the local community. With the cooperation of all stakeholders, we aspire to move forward with new ideas and modern approaches, while keeping intact the values and traditions that define our identity.

As Chairman, I extend my heartfelt gratitude to everyone who has supported Moragacha Secondary School on its journey of excellence. I am confident that, with continuous dedication and unity, we will achieve even greater milestones in the days ahead.
`;
document.getElementById("principalMessage").innerText = `It is a matter of great honor and privilege for me to serve as the Principal of Moragacha Secondary School. Since its establishment, this institution has been working tirelessly to spread the light of education in our community. We believe that true education is not limited to textbooks or classrooms; it is a lifelong journey that develops knowledge, discipline, creativity, and moral values.

Our dedicated teachers, supportive guardians, and enthusiastic students form the cornerstone of our success. Together, we are committed to building an environment where every learner feels inspired to discover their potential and achieve excellence in both academic and personal life.

In today’s fast-changing world, education must prepare our students not only for examinations but also for real-life challenges. Therefore, we emphasize character building, critical thinking, and digital literacy alongside traditional learning. We aspire to nurture responsible citizens who will contribute positively to society and lead with honesty, courage, and compassion.

I sincerely thank the guardians and well-wishers for their continued support and cooperation. Let us work hand in hand to uphold the glory of Moragacha Secondary School and take it to even greater heights.
`;
getNotice();
getChairman();
getPrincipal();

