let users=[];   


module.exports.index=function(req,res){
    //console.log(req.session.name)
    console.log("shivangi")
    res.render('index',{
        title: 'Welcome to my Page',
        layout: 'layout',
        nav : true,
        footer : true
    })
}

module.exports.contact=function(req,res){
    res.render('contact',{
        title: 'Contact Page',
        layout: 'layout',
        nav : true,
        footer : true
    })
    
    }

    module.exports.signup=function(req,res){
        res.render('signup',{
            title: 'Sign up',
            layout: 'layout',
            nav : false,
            footer : false
        })
    
    }

    module.exports.doSignup=function(req,res){
               
        let email= req.body.email;
        let password= req.body.password;
        let mobile=req.body.mobile;
        
        req.checkBody('email','email is required').notEmpty().withMessage('email cannot be empty').isEmail().withMessage('please provide valid email');
        
        req.checkBody('password','password is required').notEmpty();
        
        req.checkBody('mobile','enter valid mobile number').matches(/\d/).withMessage('must contain a number');
        
        let errors= req.validationErrors();
        console.log(errors);    
        if(errors){ 
            let messages=[];
            errors.forEach((error) => messages.push(error.msg));    
            res.render('signup',{
                title: 'Sign up',
                layout: 'layout',
                nav : false,
                footer : false,
                messages: messages
            });
        }
        
        //                if(!req.body.email || !req.body.password){
        
        //                 var error="Email is required!";
        //  res.render ('signup',{
        
        //     title: 'Sign up',
        //                 layout: 'layout',
        //                 nav : false,
        //                 footer : false,
        //                 error: error
        // })
        // }
        else{
                       let data=req.body;
                       users.push(data)
                        console.log(users);
                       
                        res.redirect('/')
        }
                        }

                        module.exports.login=function(req,res){
                            res.render('login',{
                                title: 'Login',
                                layout: 'layout',
                                nav : false,
                                footer : false
                            })
                        
                        }

                        module.exports.doLogin=(req,res) => {

                            let email= req.body.email;
                            let password= req.body.password;
                            users.filter((user)=> user.email== email && user.password== password);
                     if(user && user.length >0){
                         res.send('login success');
                     }

                     else{
                         res.send('credentials not match');
                     }
                           
                    }
                    module.exports.dashBoard=function(req,res){
                        res.render('dashboard',{
                            title: 'Dashboard',
                            layout: 'layout',
                            nav : true,
                            footer : true
                        })
                    
                    }