<script>
    let authorPic = '/ryanross.png';
</script>

<!-- <style>

    .hero {
        animation: transitionIn 0.5s duration timing-function delay iteration-count direction fill-mode;
    }
    @keyframes transitionIn {
        from {
            opacity: 0;
            transform: rotateX(-10deg)
        }
        
        to {
            opacity: 1;
            transform: rotateX(0)

        }
    }
</style> -->

<html lang="en">
    <div class="hero">
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
            <div class="max-w-md transition ease-in">
                <h1 class="text-5xl text-secondary font-bold">Ryan Ross</h1>
                <p class="py-6 text-white">Awesome stories are coming.</p>
            </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col w-full">
        <div class="divider"></div> 
    </div>

    <div class="lg:container mx-auto flex flex-col justify-center items-center">
        <div class="card lg:card bg-neutral shadow-xl m-10 w-sm">
            <div class="avatar">
                <div class="w-24 m-12 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                <img src="{authorPic}" alt="author">
                </div>
              </div>
            <div class="card-body">
              <h2 class="card-title text-3xl text-secondary">Hello There</h2>
              <div>
                <p class="text-white">I&apos;m Ryan. I make up stories and write them down. They usually take place in space, or on a distant planet and, of course, have fight scenes and explosions.
                    I like to focus on the people. It&apos;s the people who make the story worth writing and reading. Whether hurtling through space using amazing technology or trying to light a survival fire using ship wreckage in a hostile jungle, it&apos;s the people who we can identify with.</p>
                <br />
                <p class="text-white">Science is also important to me. I try to keep the settings and scenes as close to plausible science, even if not possible right now. Space is big.</p>
                <br />
                <p class="text-white">If that sounds like something you&apos;re into, then please join my monthly newsletter. You&apos;ll get upates on writing progress, discount codes, product updates, and no spam.</p>
              </div>
            </div>
          </div>
    </div>

    <div class="flex flex-col w-full">
        <div class="divider"></div> 
    </div>

    <div class="lg:container mx-auto flex flex-col justify-center items-center mb-10">
        <h1 class="text-accent prose prose-2xl">Subscribe to the Newsletter</h1>
            <form action="https://exoticmatterstudios.us9.list-manage.com/subscribe/post?u=dc5c4c9d852b9d701e2ad04e5&amp;id=8e1710bb73" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div class="form-control flex flex-row content-around p-10">
                    <input type="email" value="" id="mce-EMAIL" name="EMAIL" placeholder="email@example.com" class="input input-bordered input-primary w-full max-w-xs m-5 required email" />
                    <button class="btn btn-primary m-5">Subscribe</button>
                </div>
            </form>
        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
    </div>

    <!-- <div class="alert alert-success shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Your purchase has been confirmed!</span>
        </div>
      </div> -->
</html>

