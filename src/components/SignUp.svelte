<html lang="en">

    <!-- The button to open modal -->
    <label for="my-modal" class="btn modal-button btn-primary">Subscribe</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
    <div class="modal-box">
        <div class="grid grid-col-2 content-center">
            <h3 class="font-bold text-lg text-accent">Please enter your email</h3>
            <div class="form-control">
                <label class="input-group">
                  <span>Email</span>
                  <input type="text" placeholder="info@site.com" class="input input-bordered" />
                </label>
              </div>
        </div>
        <div>
            <div class="modal-action">
                <label for="my-modal" class="btn btn-primary">Submit</label>
            </div>           
        </div>
    </div>
    </div>

</html>