<script>
    let authorPic = '/ryanross.png';
</script>

<html lang="en">

    <style>
        body {
            animation: fadeInAnimation ease 4s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        }
        @keyframes fadeInAnimation {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    </style>

    <div class="hero">
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
            <div class="max-w-md duration-500 relative transform transition-all translate-y-12 ease-out">
                <h1 class="text-5xl text-secondary font-bold">Ryan Ross</h1>
                <p class="py-6 text-white">Awesome stories are coming.</p>
            </div>
            </div>
        </div>
        <div class="grid grid-cols-1 content-center absolute bottom-10 animate-bounce w-screen">
            <button class="btn btn-circle btn-outline btn-primary mr-auto ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
            </button>
        </div>
    </div>

    <div class="flex flex-col w-full">
        <div class="divider"></div> 
    </div>

    <div class="lg:container mx-auto flex flex-col justify-center items-center">
        <div class="card lg:card bg-neutral shadow-xl m-10 w-sm">
            <div class="avatar" id="avatar">
                <div class="w-24 m-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="{authorPic}" alt="author">
                </div>
              </div>
            <div class="card-body">
              <h2 class="card-title text-3xl text-secondary">Hello There</h2>
              <div>
                <p class="text-white">I&apos;m Ryan. I make up stories and write them down. They usually take place in space, or on a distant planet and, of course, have fight scenes and explosions.
                    I like to focus on the people. It&apos;s the people who make the story worth writing and reading. Whether hurtling through space using amazing technology or trying to light a survival fire using ship wreckage in a hostile jungle, it&apos;s the people who we can identify with.</p>
                <br />
                <p class="text-white">Science is also important to me. I try to keep the settings and scenes as close to plausible science as possible, even if that science isn&apos;t possible right now. Space is big. Overcoming its challenges from light delay to hard vacuum and radiation makes for an antagonist all its own.</p>
                <br />
                <p class="text-white">If that sounds like something you&apos;re into, then please check back soon. I&apos;m working on a newletter. You&apos;ll get updates on writing progress, discount codes, exclusive reveals, early access, and no spam. Full length sci-fi novels are comming in 2023. Make sure you're subscribed to the newsletter for announcements on them.</p>
                <br />
                <p class="text-white">Talk to you soon.</p>
              </div>
            </div>
          </div>
    </div>
</html>

