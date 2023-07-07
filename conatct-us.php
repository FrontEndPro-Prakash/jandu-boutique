<?php include 'header.php'; ?>
<div class="container">
    <!-- Breadcrumb -->
    <ol class="breadcrumb my-3">
        <li class="breadcrumb-item"><a class="grayColor" href="index.php">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
    </ol>
    <!-- Banner -->
    <section>
        <div class="col-12">
            <div class="row g-4">
                <div class="col-md-6 col-lg-4 mx-auto">
                    <a class="contactBox" href="javascript:void(0);">
                        <i class="fa-brands fa-whatsapp"></i>
                        <span>Whatsapp</span>
                        <small>+918855222200</small>
                    </a>
                </div>
                <div class="col-md-6 col-lg-4 mx-auto">
                    <a class="contactBox" href="tel:+918855222200">
                        <i class="fa-regular fa-phone-volume"></i>
                        <span>Phone Number</span>
                        <small>+918855222200</small>
                    </a>
                </div>
                <div class="col-md-6 col-lg-4 mx-auto">
                    <a class="contactBox" href="javascript:void(0);">
                        <i class="fa-brands fa-instagram"></i>
                        <span>Instagram</span>
                        <small>@jandubtq</small>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-10 mx-auto mt-5 text-center subHeading grayColor">Our customer service team are available to help with your questions from 9am - 8pm AEST Monday to Friday.Please note Dissh do not operate on public holidays or weekends.</div>
    </section>

    <section class="secPaddingTop">
        <div class="col-12">
            <div class="sectionHeading">
                <h2 class="h2">Contact Us</h2>
            </div>
        </div>
        <form class="mx-auto col-xl-5 col-lg-6 col-md-8" id="contactUsForm">
            <div class="row g-3">
                <div class="col-12">
                    <input type="text" class="form-control" name="f_name" id="f_name" placeholder="First Name">
                </div>
                <div class="col-12">
                    <input type="text" class="form-control" name="l_name" id="l_name" placeholder="Last Name">
                </div>
                <div class="col-12 col-sm-6">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Email Address">
                </div>
                <div class="col-12 col-sm-6">
                    <input type="text" class="form-control" name="phone" id="phone" placeholder="Phone">
                </div>
                <div class="col-12">
                    <textarea class="form-control" cols="30" rows="8" name="message" id="message" placeholder="Message"></textarea>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary btn-lg w-100">Submit</button>
                </div>
                <div class="col-12" id="response-div"></div>
            </div>
        </form>
    </section>
</div>
<?php include 'footer.php'; ?>