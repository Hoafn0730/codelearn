const db = {
    users: [
        {
            id: 1,
            userName: 'hoan',
            password: '123456',
            name: 'Hoàn Trần',
            avatar: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/330533/656b17e84ff15.jpg',
            bio: '',
            role: 'normal',
        },
        {
            id: 2,
            userName: 'hoan1',
            password: '123456',
            name: 'Hoàn Trần2',
            avatar: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/330533/656b17e84ff15.jpg',
            bio: '',
            role: 'admin',
        },
    ],
    categories: [
        {
            id: 1,
            name: 'Frontend Development',
            description: 'Description web Frontend development',
            slug: 'frontend-development',
        },
        {
            id: 2,
            name: 'Backend Development',
            description: 'Description web Backend development',
            slug: 'backend-development',
        },
        {
            id: 3,
            name: 'Mobile Development',
            description: 'Description web development',
            slug: 'mobile-development',
        },
        {
            id: 4,
            name: 'Program Languages',
            description: 'Description Program Languages',
            slug: 'program-languages',
        },
    ],
    notifications: [
        {
            id: 1,
            title: 'Giới thiệu khóa học Sass',
            createdAt: '10-12-2023',
        },
        {
            id: 1,
            title: 'Giới thiệu khóa học Sass',
            createdAt: '10-12-2023',
        },
        {
            id: 1,
            title: 'Giới thiệu khóa học Sass',
            createdAt: '10-12-2023',
        },
        {
            id: 1,
            title: 'Giới thiệu khóa học Sass',
            createdAt: '10-12-2023',
        },
        {
            id: 1,
            title: 'Giới thiệu khóa học Sass',
            createdAt: '10-12-2023',
        },
    ],
    courses: [
        {
            id: 1,
            name: 'NodeJS & ExpressJS',
            description:
                'Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.',
            image: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
            level: 'Cơ bản',
            price: 1000000,
            slug: 'nodejs',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            categoryId: 2,
            createdAt: '',
            updatedAt: '',
            DeletedAt: '',
        },
        {
            id: 2,
            name: 'ReactJS cơ bản',
            description:
                'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.',
            image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
            level: 'Cơ bản',
            price: 1200000,
            slug: 'reactjs',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            categoryId: 1,
            createdAt: '',
            updatedAt: '',
            DeletedAt: '',
        },
        {
            id: 3,
            name: 'Lập Trình JavaScript Cơ Bản',
            description:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            image: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
            level: 'Cơ bản',
            price: 0,
            slug: 'javascript',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            categoryId: 4,
            createdAt: '',
            updatedAt: '',
            DeletedAt: '',
        },
        {
            id: 4,
            name: 'HTML CSS Cơ bản',
            description: 'Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee',
            image: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
            level: 'Cơ bản',
            price: 0,
            slug: 'html-css',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            categoryId: 4,
            createdAt: '',
            updatedAt: '',
            DeletedAt: '',
        },
        {
            id: 5,
            name: 'Lập trình C++ cơ bản',
            description:
                'Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục con đường trở thành một lập trình viên.',
            image: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png',
            level: 'Cơ bản',
            price: 0,
            slug: 'lap-trinh-cpp-co-ban',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            categoryId: 4,
            createdAt: '',
            updatedAt: '',
            DeletedAt: '',
        },
        {
            id: 6,
            name: 'Lập Trình JavaScript Nâng Cao',
            description:
                'Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...',
            image: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
            level: 'Nâng cao',
            price: 299000,
            slug: 'javascript-nang-cao',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            categoryId: 4,
            createdAt: '',
            updatedAt: '',
            DeletedAt: '',
        },
        {
            id: 7,
            name: 'Typescript cơ bản',
            description:
                'Học Typescript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài họ',
            image: 'https://nodemy.vn/wp-content/uploads/2023/03/type-1024x576.png',
            level: 'Cơ bản',
            price: 0,
            slug: 'typescript-co-ban',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            categoryId: 4,
            createdAt: '',
            updatedAt: '',
            DeletedAt: '',
        },
        {
            id: 8,
            name: 'Redux cơ bản',
            description:
                'Học Redux cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài họ',
            image: 'https://i.ytimg.com/vi/vYiUK_CF2p0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCJukG78Td0zxpf6a-ajzegLmbvdg',
            level: 'Cơ bản',
            price: 299000,
            slug: 'redux-co-ban',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            categoryId: 1,
            createdAt: '',
            updatedAt: '',
            DeletedAt: '',
        },
        {
            id: 9,
            name: 'Học MongoDB cơ bản',
            description:
                'Học MongoDB cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài họ',
            image: 'https://img-b.udemycdn.com/course/480x270/1906852_93c6_2.jpg',
            level: 'Cơ bản',
            price: 0,
            slug: 'mongodb-co-ban',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            categoryId: 2,
            createdAt: '',
            updatedAt: '',
            DeletedAt: '',
        },
        {
            id: 10,
            name: 'Lập trình Mobile với React Native',
            description: 'Lập trình Mobile với React Native',
            image: 'https://i.ytimg.com/vi/NDeFEFIe7yg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBo1Fh7aP8EeUufST7QiV_BC8y-MQ',
            level: 'Cơ bản',
            price: 399000,
            slug: 'lap-trinh-mobile-voi-react-native',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            categoryId: 3,
            createdAt: '',
            updatedAt: '',
            DeletedAt: '',
        },
        // Coming soon
        {
            id: 11,
            name: 'NextJS cơ bản',
            description:
                'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.',
            image: './assets/img/coming-soon.jpg',
            level: 'Cơ bản',
            price: -1,
            slug: 'reactjs',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            categoryId: 1,
            createdAt: '',
            updatedAt: '',
            DeletedAt: '',
        },
        {
            id: 12,
            name: 'NestJS cơ bản',
            description:
                'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.',
            image: './assets/img/coming-soon.jpg',
            level: 'Cơ bản',
            price: -1,
            slug: 'reactjs',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            categoryId: 2,
            createdAt: '',
            updatedAt: '',
            DeletedAt: '',
        },
        {
            id: 13,
            name: 'Docker cơ bản',
            description:
                'Khóa học Docker từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.',
            image: './assets/img/coming-soon.jpg',
            level: 'Cơ bản',
            price: -1,
            slug: 'reactjs',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            categoryId: 2,
            createdAt: '',
            updatedAt: '',
            DeletedAt: '',
        },
    ],
    lessons: [
        {
            id: 1,
            name: '#1: Lời khuyên trước khóa học Node Express | Học lập trình cơ bản | Tự học lập trình online',
            description:
                'Đây là khóa học Node với Express Framework được chia sẻ miễn phí tại Youtube. Mình rất mong muốn được chia sẻ những kiến thức đã tích lũy được trong quá trình làm việc thực tế tới các bạn. Hi vọng các bạn sẽ có thêm đam mê cho việc học lập trình.',
            videoId: 'z2f7RHgvddc',
            duration: '2:30',
            image: 'https://img-b.udemycdn.com/course/480x270/1906852_93c6_2.jpg',
            slug: 'bai-1',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            courseId: 1,
        },
        {
            id: 2,
            name: '#2: HTTP protocol',
            description:
                'Đây là khóa học Node với Express Framework được chia sẻ miễn phí tại Youtube. Mình rất mong muốn được chia sẻ những kiến thức đã tích lũy được trong quá trình làm việc thực tế tới các bạn. Hi vọng các bạn sẽ có thêm đam mê cho việc học lập trình.',
            videoId: 'SdcdneSdoV4',
            duration: '2:30',
            image: 'https://img-b.udemycdn.com/course/480x270/1906852_93c6_2.jpg',
            slug: 'bai-1',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            courseId: 1,
        },
        {
            id: 3,
            name: '#3: SSR & CSR',
            description:
                'Đây là khóa học Node với Express Framework được chia sẻ miễn phí tại Youtube. Mình rất mong muốn được chia sẻ những kiến thức đã tích lũy được trong quá trình làm việc thực tế tới các bạn. Hi vọng các bạn sẽ có thêm đam mê cho việc học lập trình.',
            videoId: 'HLEu57iLrRo',
            duration: '2:30',
            image: 'https://img-b.udemycdn.com/course/480x270/1906852_93c6_2.jpg',
            slug: 'bai-1',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            courseId: 1,
        },
        {
            id: 4,
            name: '#4: Install NodeJS',
            description:
                'Đây là khóa học Node với Express Framework được chia sẻ miễn phí tại Youtube. Mình rất mong muốn được chia sẻ những kiến thức đã tích lũy được trong quá trình làm việc thực tế tới các bạn. Hi vọng các bạn sẽ có thêm đam mê cho việc học lập trình.',
            videoId: 'CcSuYLjKW3g',
            duration: '2:30',
            image: 'https://img-b.udemycdn.com/course/480x270/1906852_93c6_2.jpg',
            slug: 'bai-1',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            courseId: 1,
        },
        {
            id: 5,
            name: '#5: Install express',
            description:
                'Đây là khóa học Node với Express Framework được chia sẻ miễn phí tại Youtube. Mình rất mong muốn được chia sẻ những kiến thức đã tích lũy được trong quá trình làm việc thực tế tới các bạn. Hi vọng các bạn sẽ có thêm đam mê cho việc học lập trình.',
            videoId: 'tfQXZ8jES6A',
            duration: '2:30',
            image: 'https://img-b.udemycdn.com/course/480x270/1906852_93c6_2.jpg',
            slug: 'bai-1',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            courseId: 1,
        },
        {
            id: 6,
            name: '#6: Install nodemon & inspector',
            description:
                'Đây là khóa học Node với Express Framework được chia sẻ miễn phí tại Youtube. Mình rất mong muốn được chia sẻ những kiến thức đã tích lũy được trong quá trình làm việc thực tế tới các bạn. Hi vọng các bạn sẽ có thêm đam mê cho việc học lập trình.',
            videoId: 'zCFOn4YXr00',
            duration: '2:30',
            image: 'https://img-b.udemycdn.com/course/480x270/1906852_93c6_2.jpg',
            slug: 'bai-1',
            content:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
            courseId: 1,
        },
    ],
    home: [
        {
            title: 'Popular Courses',
            listCourses: [
                {
                    id: 1,
                    name: 'Node & ExpressJS',
                    description:
                        'Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
                    level: 'Cơ bản',
                    price: 1000000,
                    slug: 'nodejs',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 2,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 2,
                    name: 'ReactJS',
                    description:
                        'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
                    level: 'Cơ bản',
                    price: 1200000,
                    slug: 'reactjs',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 1,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 3,
                    name: 'Lập Trình JavaScript Cơ Bản',
                    description:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
                    level: 'Cơ bản',
                    price: 0,
                    slug: 'javascript',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 4,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 4,
                    name: 'HTML CSS Cơ bản',
                    description:
                        'Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
                    level: 'Cơ bản',
                    price: 0,
                    slug: 'html-css',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 4,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 5,
                    name: 'Lập trình C++ cơ bản',
                    description:
                        'Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục con đường trở thành một lập trình viên.',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png',
                    level: 'Cơ bản',
                    price: 0,
                    slug: 'lap-trinh-cpp-co-ban',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 4,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 6,
                    name: 'Lập Trình JavaScript Nâng Cao',
                    description:
                        'Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
                    level: 'Nâng cao',
                    price: 299000,
                    slug: 'javascript-nang-cao',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 4,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 7,
                    name: 'Typescript cơ bản',
                    description:
                        'Học Typescript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài họ',
                    image: 'https://nodemy.vn/wp-content/uploads/2023/03/type-1024x576.png',
                    level: 'Cơ bản',
                    price: 0,
                    slug: 'typescript-co-ban',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 4,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
            ],
        },
        {
            title: 'Free Courses',
            listCourses: [
                {
                    id: 3,
                    name: 'Lập Trình JavaScript Cơ Bản',
                    description:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
                    level: 'Cơ bản',
                    price: 0,
                    slug: 'javascript',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 4,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 4,
                    name: 'HTML CSS Cơ bản',
                    description:
                        'Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
                    level: 'Cơ bản',
                    price: 0,
                    slug: 'html-css',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 4,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 5,
                    name: 'Lập trình C++ cơ bản',
                    description:
                        'Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục con đường trở thành một lập trình viên.',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png',
                    level: 'Cơ bản',
                    price: 0,
                    slug: 'lap-trinh-cpp-co-ban',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 4,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },

                {
                    id: 7,
                    name: 'Typescript cơ bản',
                    description:
                        'Học Typescript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài họ',
                    image: 'https://nodemy.vn/wp-content/uploads/2023/03/type-1024x576.png',
                    level: 'Cơ bản',
                    price: 0,
                    slug: 'typescript-co-ban',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 4,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },

                {
                    id: 9,
                    name: 'Học MongoDB cơ bản',
                    description:
                        'Học MongoDB cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài họ',
                    image: 'https://img-b.udemycdn.com/course/480x270/1906852_93c6_2.jpg',
                    level: 'Cơ bản',
                    price: 0,
                    slug: 'mongodb-co-ban',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 2,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
            ],
        },
        {
            title: 'Pro Courses',
            listCourses: [
                {
                    id: 1,
                    name: 'Node & ExpressJS',
                    description:
                        'Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
                    level: 'Cơ bản',
                    price: 1000000,
                    slug: 'nodejs',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 2,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 2,
                    name: 'ReactJS',
                    description:
                        'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
                    level: 'Cơ bản',
                    price: 1200000,
                    slug: 'reactjs',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 1,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 6,
                    name: 'Lập Trình JavaScript Nâng Cao',
                    description:
                        'Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
                    level: 'Nâng cao',
                    price: 299000,
                    slug: 'javascript-nang-cao',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 4,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 8,
                    name: 'Redux cơ bản',
                    description:
                        'Học Redux cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài họ',
                    image: 'https://i.ytimg.com/vi/vYiUK_CF2p0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCJukG78Td0zxpf6a-ajzegLmbvdg',
                    level: 'Cơ bản',
                    price: 299000,
                    slug: 'redux-co-ban',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 1,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 10,
                    name: 'Lập trình Mobile với React Native',
                    description: 'Lập trình Mobile với React Native',
                    image: 'https://i.ytimg.com/vi/NDeFEFIe7yg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBo1Fh7aP8EeUufST7QiV_BC8y-MQ',
                    level: 'Cơ bản',
                    price: 399000,
                    slug: 'lap-trinh-mobile-voi-react-native',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 1,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 11,
                    name: 'NextJS cơ bản',
                    description:
                        'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.',
                    image: './assets/img/coming-soon.jpg',
                    level: 'Cơ bản',
                    price: -1,
                    slug: 'reactjs',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 1,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 12,
                    name: 'NestJS cơ bản',
                    description:
                        'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.',
                    image: './assets/img/coming-soon.jpg',
                    level: 'Cơ bản',
                    price: -1,
                    slug: 'reactjs',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 2,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
            ],
        },
        {
            title: 'New Courses',
            listCourses: [
                {
                    id: 1,
                    name: 'Node & ExpressJS',
                    description:
                        'Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
                    level: 'Cơ bản',
                    price: 1000000,
                    slug: 'nodejs',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 2,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 2,
                    name: 'ReactJS',
                    description:
                        'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
                    level: 'Cơ bản',
                    price: 1200000,
                    slug: 'reactjs',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 1,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 6,
                    name: 'Lập Trình JavaScript Nâng Cao',
                    description:
                        'Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...',
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
                    level: 'Nâng cao',
                    price: 299000,
                    slug: 'javascript-nang-cao',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 4,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 7,
                    name: 'Typescript cơ bản',
                    description:
                        'Học Typescript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài họ',
                    image: 'https://nodemy.vn/wp-content/uploads/2023/03/type-1024x576.png',
                    level: 'Cơ bản',
                    price: 0,
                    slug: 'typescript-co-ban',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 4,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 8,
                    name: 'Redux cơ bản',
                    description:
                        'Học Redux cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài họ',
                    image: 'https://i.ytimg.com/vi/vYiUK_CF2p0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCJukG78Td0zxpf6a-ajzegLmbvdg',
                    level: 'Cơ bản',
                    price: 299000,
                    slug: 'redux-co-ban',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 1,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
                {
                    id: 10,
                    name: 'Lập trình Mobile với React Native',
                    description: 'Lập trình Mobile với React Native',
                    image: 'https://i.ytimg.com/vi/NDeFEFIe7yg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBo1Fh7aP8EeUufST7QiV_BC8y-MQ',
                    level: 'Cơ bản',
                    price: 399000,
                    slug: 'lap-trinh-mobile-voi-react-native',
                    content:
                        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học',
                    categoryId: 1,
                    createdAt: '',
                    updatedAt: '',
                    DeletedAt: '',
                },
            ],
        },
    ],
    'road-map': [
        {
            header: 'Giao đoạn 1: Ôn Tập Kiến Thức',
            listPhaseCourses: [
                {
                    title: 'Kiến thức cơ bản/ Ngôn ngữ lập trình',
                    images: [
                        {
                            name: 'html',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdark-html.png&w=1920&q=75',
                        },
                        {
                            name: 'css',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdark-css.png&w=1920&q=75',
                        },
                        {
                            name: 'js',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fjavascript.png&w=1920&q=75',
                        },
                        {
                            name: 'ts',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Ftypescript.png&w=1920&q=75',
                        },
                    ],
                },
            ],
        },
        {
            header: 'Giao đoạn 2: Học Kiến Thức (Frontend/Backend)',
            listPhaseCourses: [
                {
                    title: 'Frontend',
                    images: [
                        {
                            name: 'reactjs',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdark-react.png&w=1920&q=75',
                        },
                        {
                            name: 'redux',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdark-redux.png&w=1920&q=75',
                        },
                        {
                            name: 'nextjs',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdark-nextjs.png&w=1920&q=75',
                        },
                    ],
                },
                {
                    title: 'Backend',
                    images: [
                        {
                            name: 'nodejs',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdark-express.png&w=1920&q=75',
                        },
                        {
                            name: 'nestjs',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdark-nestjs.png&w=1920&q=75',
                        },
                        {
                            name: 'mongodb',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fmongodb.png&w=1920&q=75',
                        },
                    ],
                },
            ],
        },
        {
            header: 'Giao đoạn 3: Thực Hành Fullstack',
            listPhaseCourses: [
                {
                    title: 'Định Hướng 1',
                    images: [
                        {
                            name: 'reactjs',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdark-react.png&w=1920&q=75',
                        },
                        {
                            name: 'nextjs',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdark-nextjs.png&w=1920&q=75',
                        },
                        {
                            name: 'nestjs',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdark-nestjs.png&w=1920&q=75',
                        },
                    ],
                },
                {
                    title: 'Định Hướng 2',
                    images: [
                        {
                            name: 'reactjs',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdark-react.png&w=1920&q=75',
                        },
                        {
                            name: 'nodejs',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdark-express.png&w=1920&q=75',
                        },
                        {
                            name: 'mongodb',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fmongodb.png&w=1920&q=75',
                        },
                    ],
                },
            ],
        },
        {
            header: 'Giao đoạn 4: Triển khai dự án thực tế',
            listPhaseCourses: [
                {
                    title: 'Xây dựng và triển khai sản phẩm',
                    images: [
                        {
                            name: 'docker',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdocker.png&w=1920&q=75',
                        },
                        {
                            name: 'nginx',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fnginx.png&w=1920&q=75',
                        },
                        {
                            name: 'hosting',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdark-vps.png&w=1920&q=75',
                        },
                        {
                            name: 'domain',
                            image: 'https://hoidanit.com.vn/_next/image?url=%2Fimages%2Flogo%2Fdark-domain.png&w=1920&q=75',
                        },
                    ],
                },
            ],
        },
    ],
    blogs: [
        {
            id: 1,
            title: 'Hướng dẫn chi tiết cách sử dụng Dev Mode trong khóa Pro',
            description:
                'Chào bạn! Nếu bạn đã là học viên khóa Pro của F8, chắc hẳn bạn đã biết tới "Dev Mode" - giúp thực hành code song song khi xem video (bạn không cần phải dùng tới VS code nữa).',
            image: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/8334/64f01064b0724.png',
            hashtag: 'ReactJS',
        },
        {
            id: 2,
            title: 'Tất tần tật` về cải thiện Performance của 1 trang web🚀',
            description:
                'Ở bài viết này, chúng ta cùng nhau tìm hiểu về các vấn đề liên quan đến Performance ở phía FE. Không dài dòng nữa, bắt đầu thôi🚀',
            image: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7940/64a645ea70312.png',
            hashtag: 'JavaScript',
        },
        {
            id: 3,
            title: 'Một số "cẩm nang" hay khi làm việc với HTML/CSS😂 ',
            description:
                'Bài viết này đơn giản là nơi để mình lưu lại những kinh nghiệm mình đã làm việc với HTML/CSS cũng như chia sẻ phần nào cho bạn nào chưa biết. Mình cùng bắt đầu bài viết thôi, yooolo🚀',
            image: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7924/64a2487459fe5.jpg',
            hashtag: 'Frontend&c=1',
        },
        {
            id: 1,
            title: 'Hướng dẫn chi tiết cách sử dụng Dev Mode trong khóa Pro',
            description:
                'Chào bạn! Nếu bạn đã là học viên khóa Pro của F8, chắc hẳn bạn đã biết tới "Dev Mode" - giúp thực hành code song song khi xem video (bạn không cần phải dùng tới VS code nữa).',
            image: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/8334/64f01064b0724.png',
            hashtag: 'reactjs',
        },
        {
            id: 1,
            title: 'Hướng dẫn chi tiết cách sử dụng Dev Mode trong khóa Pro',
            description:
                'Chào bạn! Nếu bạn đã là học viên khóa Pro của F8, chắc hẳn bạn đã biết tới "Dev Mode" - giúp thực hành code song song khi xem video (bạn không cần phải dùng tới VS code nữa).',
            image: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/8334/64f01064b0724.png',
            hashtag: 'reactjs',
        },
    ],
    register: [
        {
            id: 1,
            courseId: 1,
            userId: 1,
            userName: 'hoan',
            registrationDate: '2023-07-30',
            status: true,
            process: 30,
        },
        {
            id: 1,
            courseId: 1,
            userId: 1,
            userName: 'hoan2',
            registrationDate: '2023-07-30',
            status: true,
            process: 30,
        },
        {
            id: 1,
            courseId: 1,
            userId: 1,
            userName: 'hoan2',
            registrationDate: '2023-07-30',
            status: true,
            process: 30,
        },
    ],
};

export default db;
