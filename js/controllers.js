angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.slides = [
        'img/home-slide/slider1.jpg',
        'img/home-slide/slider2.jpg',
        'img/home-slide/slider3.jpg'
    ];
    $scope.products = [
        {
            img: "img/Products/8.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/Products/7.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/Products/6.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/Products/5.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/Products/4.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/Products/3.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/Products/2.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/Products/1.jpg",
            name: "Zara",
            price: "25000"
    }
                      ];
    $scope.brandlist = [
        {
            back_img: "img/slider/1.jpg",
            img: "img/brands/1.png"
        },
        {
            back_img: "img/slider/2.jpg",
            img: "img/brands/2.png"
        },
        {
            back_img: "img/slider/3.jpg",
            img: "img/brands/3.png"
        },
        {
            back_img: "img/slider/1.jpg",
            img: "img/brands/4.png"
        },
        {
            back_img: "img/slider/2.jpg",
            img: "img/brands/5.png"
        },
        {
            back_img: "img/slider/3.jpg",
            img: "img/brands/6.png"
        },
                       ];
})

.controller('ContactUsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("contactus");
        $scope.menutitle = NavigationService.makeactive("Contact-Us");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('BrandsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("brands");
        $scope.menutitle = NavigationService.makeactive("Brands");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('CategoryCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("category");
        $scope.menutitle = NavigationService.makeactive("Category");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.products = [
            {
                img: "img/Products/8.jpg",
                name: "Zara",
                price: "25000"
    },
            {
                img: "img/Products/7.jpg",
                name: "Zara",
                price: "25000"
    },
            {
                img: "img/Products/6.jpg",
                name: "Zara",
                price: "25000"
    },
            {
                img: "img/Products/5.jpg",
                name: "Zara",
                price: "25000"
    },
            {
                img: "img/Products/4.jpg",
                name: "Zara",
                price: "25000"
    },
            {
                img: "img/Products/3.jpg",
                name: "Zara",
                price: "25000"
    },
            {
                img: "img/Products/2.jpg",
                name: "Zara",
                price: "25000"
    },
            {
                img: "img/Products/1.jpg",
                name: "Zara",
                price: "25000"
    }
                      ];
        $scope.oneAtATime = true;
    })
    .controller('headerctrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
    })

;