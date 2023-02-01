const CLIENT_ID = '4e3656c13514c0cb4736';
const CLIENT_SECRET = 'fb324b4c20931849287b0c95c7dfb4f3626a18e5';

async function getUserDetails(name) {
  const res = await fetch(
    `https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  );
  const profile = await res.json();
  return profile;
}

async function getRepos(profile) {
  const res = await fetch(
    `${profile.repos_url}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&per_page=10`
  );
  const repo = await res.json();
  return repo;
}

document.querySelector('#search').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.querySelector('#findByUsername').value;

  if (username.length > 0) {
    document.querySelector('.loader').style.display = 'block';
    document.querySelector('.notFound').style.display = 'none';
    document.querySelector('.user-details').style.display = 'none';
    const profile = await getUserDetails(username);
    document.querySelector('.loader').style.display = 'none';

    if (profile.message === 'Not Found') {
      document.querySelector('.notFound').style.display = 'block';
    } else {
      const repos = await getRepos(profile);
      //   console.log(repos);
      document.querySelector('.user-details').style.display = 'flex';

      showProfile(profile);
      showRepos(repos);
    }

    //   console.log(profile);
  } else {
    alert('Please enter a username');
  }
});

function showRepos(repos) {
  let newHtml = '';
  for (let repo of repos) {
    newHtml += `
        <div class="repo">
            <div class="repo_name">
                <a href="${repo.html_url}">${repo.name}</a>
            </div>
            <p>
                <span class="circle"></span> ${repo.language}
                <ion-icon name="star-outline"></ion-icon> ${repo.watchers_count}
                <ion-icon name="git-branch-outline"></ion-icon> ${repo.forks_count}
            </p>
        </div>
        `;
  }

  document.querySelector('.repos').innerHTML = newHtml;
}

function showProfile(profile) {
  document.querySelector('.profile').innerHTML = `
    <img
            src="${profile.avatar_url}"
            alt="letstrie"
          />
          <p class="name">${profile.name}</p>
          <p class="username login">${profile.login}</p>
          <p class="bio">${profile.bio}</p>

          <div class="followers-stars">
            <p>
              <ion-icon name="people-outline"></ion-icon>
              <span class="followers"> ${profile.followers} </span> followers
            </p>
            <span class="dot">·</span>
            <p><span class="following"> ${profile.following} </span> following</p>
          </div>

          <p class="company">
            <ion-icon name="business-outline"></ion-icon>
            ${profile.company}
          </p>
          <p class="location">
            <ion-icon name="location-outline"></ion-icon>${profile.location}
          </p>
    `;
}
