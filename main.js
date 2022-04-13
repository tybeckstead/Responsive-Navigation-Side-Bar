//^ Declare Variables
//! Side Bar - Parent Container
const side = document.getElementById('side')
//! Side Bar - Close Menu
const close_nav = document.getElementById('close-nav')
//! Side Bar - checkbox hamburger menu
const ham = document.getElementById('ham');
//! Side Bar - Side Bar Elements
const side_bar = document.getElementById('side-bar');
const inactive_side = document.getElementById('inactive-side');
//! Side Bar - GSAP Set Positions
gsap.set(side_bar, {
    x: 1400, 
    y: 0, 
});

//^ Side Bar - Inactive Side Bar 
//! Event Listener - Click Function
inactive_side.addEventListener('click', function hide_nav_inactive() {
    //@ GSAP Animation - Inactive Container
    gsap.to(inactive_side, {
        opacity: 0,
        duration: 0.2, 
        delay: 0.1,
        ease: "sine.in",
    });
    //@ GSAP Animation - Side Bar Container
    gsap.to(side_bar, {
        duration: 0.2, 
        delay: 0.05,
        ease: "sine.in",
        x: 550, 
        y: 0, 
        onComplete: function() {
            //@ GSAP Animation - Animate Side Bar back to orignal position
            gsap.to(side_bar, {
                x: 1400, 
                y: 0, 
            });
            //! Display: None | Hide element on HTML page
            side_bar.style.display = "none";
            inactive_side.style.display = "none";
            //! Add 'display-none' | Add classname to Side Bar Parent Contianer
            side.classList.add('display-none')
            //! Checkbox Hamburger Navigation is unchecked
            ham.checked = false;
        }
    });
});

//^ Side Bar - Close Navigation Icon
//! Event Listener - Click Function
close_nav.addEventListener('click', function close_menu() {
    //@ GSAP Animation - Inactive Side Bar Container
    gsap.to(inactive_side, {
        opacity: 0,
        duration: 0.2, 
        delay: 0.1,
        ease: "sine.in",
    });
    //@ GSAP Animation - Side Bar Container
    gsap.to(side_bar, {
        duration: 0.2, 
        delay: 0.05,
        ease: "sine.in",
        x: 550, 
        y: 0, 
        onComplete: function() {
            //@ GSAP - Animate side bar back to orignal position
            gsap.to(side_bar, {
                x: 1400, 
                y: 0, 
            });
            //! Display: None | Hide element on HTML page
            side_bar.style.display = "none";
            inactive_side.style.display = "none";
            //! Add 'display-none' | Add classname to Side Bar Parent Contianer
            side.classList.add('display-none')
            //! Hamburger Checkbox - Set to false/unchecked 
            ham.checked = false;
        }
    });
});

//^ Side Bar - Hamburger Navigation Icon
//! Event Listener - Click Function
ham.addEventListener('click', function check_ham() {
    if(ham.checked == true){
        //! Display: Block | Show element on HTML page 
        side_bar.style.display = "block";
        inactive_side.style.display = "block";
        //! Remove 'display-none' | Remove classname to Side Bar Parent Contianer
        side.classList.remove('display-none')
        //@ GSAP - Animate Side Bar Container into page 
        gsap.to(side_bar, {
            duration: 0.2, 
            delay: 0.05,
            ease: "sine.out",
            x: 0, 
            y: 0, 
        });
        //@ GSAP Animation - Inactive Contanier
        gsap.to(inactive_side, {
            duration: 0.3, 
            delay: 0.1,
            ease: "sine.out",
            opacity: 1
        });
    } 
    else {
        //@ GSAP Animation - Inactive Contanier
        gsap.to(inactive_side, {
            opacity: 0,
            duration: 0.2, 
            delay: 0.1,
            ease: "sine.in",
        });
        //@ GSAP Animation - Side Bar Container
        gsap.to(side_bar, {
            duration: 0.2, 
            delay: 0.05,
            ease: "sine.in",
            x: 550, 
            y: 0, 
            //@ GSAP - OnComplete Function After Side Bar Animation
            onComplete: function() {
                //@ GSAP - Animate side bar back to orignal position
                gsap.to(side_bar, {
                    x: 1400, 
                    y: 0, 
                });
                //! Display: None | Hide element on HTML page
                side_bar.style.display = "none";
                inactive_side.style.display = "none";
                //! Add 'display-none' | Add classname to Side Bar Parent Contianer
                side.classList.add('display-none');
                //! Hamburger Checkbox - Set to false/unchecked 
                ham.checked = false;
            }
        });
    }
});


//^ MEDIA QUERY - Tablet and Smaller Media Views
//! Function - If/Else Statement to run function at specific window inner width
let resizing_element = () => {
    //# If Else Statement - if the window is great than or equal to 768px Media Query
    if (window.innerWidth >= 768 ) {
        //! Display: None | For Elements Above Tablet/Mobile View  
        side_bar.style.display = "none";
        inactive_side.style.display = "none";
        //! Add 'display-none' | Add classname to Side Bar Parent Contianer
        side.classList.add('display-none');
        //! Hamburger Checkbox - Set to false/unchecked 
        ham.checked = false;
        //@ GSAP Animation - Place Side Bar Back to Orignal Set Position
        gsap.to(side_bar, {
            x: 1400, 
            y: 0, 
        });
    //# Anything Below 768px on Media Query
    } else {
        //! Side Bar Parent Container - Add Classname 'Display-None'
        side.classList.add('display-none');
        gsap.to(side_bar, {
            x: 1400, 
            y: 0, 
        });
        //! Hamburger Checkbox - Set to false/unchecked 
        ham.checked = false;
    }
}
window.addEventListener('resize', resizing_element);


