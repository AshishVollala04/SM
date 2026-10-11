// FutureSchool - Complete School Management System (Local Prototype)

// Role Access and Navigation Configuration
const roleProfiles = {
    student: {
        startPage: 'student',
        access: ['student', 'attendance', 'homework', 'marks', 'reports', 'questions', 'tutor', 'materials', 'library', 'exams', 'timetable', 'transport']
    },
    parent: {
        startPage: 'parent',
        access: ['parent', 'attendance', 'homework', 'marks', 'reports', 'fees', 'parent-payments', 'exams', 'timetable', 'transport', 'materials', 'parent-meeting']
    },
    teacher: {
        startPage: 'teacher',
        access: ['teacher', 'teacher-students', 'attendance', 'homework', 'marks', 'reports', 'questions', 'timetable', 'materials', 'exams', 'notifications', 'lesson-planner', 'question-paper']
    },
    admin: {
        startPage: 'admin-dashboard',
        access: ['admin-dashboard', 'admissions', 'admin-students', 'admin-teachers', 'admin-parents', 'admin', 'classes', 'attendance', 'homework', 'marks', 'reports', 'exams', 'fees', 'admin-payments', 'admin-defaulters', 'notifications', 'settings']
    }
};

const roleNavConfig = {
    admin: [
        {
            heading: 'DASHBOARD',
            items: [{ page: 'admin-dashboard', label: 'Admin Dashboard', badge: 'Core' }]
        },
        {
            heading: 'PEOPLE',
            items: [
                { page: 'admissions', label: 'Admissions', badge: 'Core' },
                { page: 'admin-students', label: 'Students' },
                { page: 'admin-teachers', label: 'Teachers' },
                { page: 'admin-parents', label: 'Parents' },
                { page: 'admin', label: 'User Accounts' }
            ]
        },
        {
            heading: 'ACADEMICS',
            items: [
                { page: 'classes', label: 'Classes', badge: 'Core' },
                { page: 'attendance', label: 'Attendance Reports' },
                { page: 'homework', label: 'Homework Overview' },
                { page: 'marks', label: 'Marks Overview' },
                { page: 'reports', label: 'Report Cards' },
                { page: 'exams', label: 'Exams & Notices' }
            ]
        },
        {
            heading: 'FINANCE',
            items: [
                { page: 'fees', label: 'Fees' },
                { page: 'admin-payments', label: 'Payments' },
                { page: 'admin-defaulters', label: 'Fee Defaulters' }
            ]
        },
        {
            heading: 'COMMUNICATION',
            items: [{ page: 'notifications', label: 'Notifications' }]
        },
        {
            heading: 'ADMINISTRATION',
            items: [{ page: 'settings', label: 'School Settings' }]
        }
    ],
    teacher: [
        {
            heading: 'DASHBOARD',
            items: [{ page: 'teacher', label: 'Teacher Dashboard' }]
        },
        {
            heading: 'MY CLASS',
            items: [
                { page: 'teacher-students', label: 'My Students' },
                { page: 'attendance', label: 'Attendance Entry' },
                { page: 'homework', label: 'Homework' },
                { page: 'marks', label: 'Marks Entry' },
                { page: 'reports', label: 'Report Cards' }
            ]
        },
        {
            heading: 'TEACHING',
            items: [
                { page: 'questions', label: 'Quiz Creation' },
                { page: 'timetable', label: 'Timetable' },
                { page: 'materials', label: 'Study Materials' },
                { page: 'exams', label: 'Exams & Notices' }
            ]
        },
        {
            heading: 'COMMUNICATION',
            items: [{ page: 'notifications', label: 'Parent Communication' }]
        },
        {
            heading: 'AI TOOLS',
            items: [
                { page: 'lesson-planner', label: 'Lesson Planner' },
                { page: 'question-paper', label: 'Question Paper Generator' }
            ]
        }
    ],
    parent: [
        {
            heading: 'DASHBOARD',
            items: [{ page: 'parent', label: 'Parent Dashboard' }]
        },
        {
            heading: 'MY CHILD',
            items: [
                { page: 'attendance', label: 'Attendance' },
                { page: 'homework', label: 'Homework' },
                { page: 'marks', label: 'Marks' },
                { page: 'reports', label: 'Report Card' }
            ]
        },
        {
            heading: 'PAYMENTS',
            items: [
                { page: 'fees', label: 'Fees' },
                { page: 'parent-payments', label: 'Payment History' }
            ]
        },
        {
            heading: 'SCHOOL',
            items: [
                { page: 'exams', label: 'Notices' },
                { page: 'timetable', label: 'Timetable' },
                { page: 'transport', label: 'Transport' },
                { page: 'materials', label: 'Study Materials' },
                { page: 'parent-meeting', label: 'Request Meeting' }
            ]
        }
    ],
    student: [
        {
            heading: 'DASHBOARD',
            items: [{ page: 'student', label: 'Student Dashboard' }]
        },
        {
            heading: 'MY LEARNING',
            items: [
                { page: 'attendance', label: 'Attendance' },
                { page: 'homework', label: 'Homework' },
                { page: 'marks', label: 'Marks' },
                { page: 'reports', label: 'Report Card' },
                { page: 'questions', label: 'Quiz Zone' },
                { page: 'tutor', label: 'AI Tutor' }
            ]
        },
        {
            heading: 'RESOURCES',
            items: [
                { page: 'materials', label: 'Study Materials' },
                { page: 'library', label: 'Digital Library' },
                { page: 'exams', label: 'Exams & Notices' }
            ]
        },
        {
            heading: 'SCHOOL SERVICES',
            items: [
                { page: 'timetable', label: 'Timetable' },
                { page: 'transport', label: 'Transport' }
            ]
        }
    ]
};

// Initial Seed Data (Structured Relational Prototype Model)
const initialAccounts = [
    {
        id: 'account-student-1',
        studentId: 's-101',
        name: 'Aanya Sharma',
        email: 'student@school.edu',
        password: 'student123',
        role: 'student',
        scope: 'c-10a',
        active: true
    },
    {
        id: 'account-parent-1',
        linkedStudentIds: ['s-101', 's-102'],
        name: 'Ramesh Sharma',
        email: 'parent@school.edu',
        password: 'parent123',
        role: 'parent',
        active: true
    },
    {
        id: 'account-teacher-1',
        teacherId: 't-101',
        assignedClassIds: ['c-10a', 'c-9b'],
        assignedSubjects: ['Mathematics', 'Science'],
        name: 'Mr. Joseph',
        email: 'teacher@school.edu',
        password: 'teacher123',
        role: 'teacher',
        active: true
    },
    {
        id: 'account-admin-1',
        name: 'School Admin',
        email: 'admin@school.edu',
        password: 'admin123',
        role: 'admin',
        active: true
    }
];

const initialClasses = [
    { id: 'c-10a', name: 'Class 10', section: 'A', teacherId: 't-101', teacherName: 'Mr. Joseph', active: true },
    { id: 'c-9b', name: 'Class 9', section: 'B', teacherId: 't-102', teacherName: 'Ms. Nair', active: true },
    { id: 'c-8a', name: 'Class 8', section: 'A', teacherId: 't-103', teacherName: 'Mrs. Thomas', active: true }
];

const initialStudents = [
    {
        id: 's-101',
        name: 'Aanya Sharma',
        admissionNumber: 'FS-2022-008',
        dob: '2010-05-14',
        classId: 'c-10a',
        className: 'Class 10',
        section: 'A',
        roll: '08',
        parentAccountId: 'account-parent-1',
        parentName: 'Ramesh Sharma',
        parentMobile: '+91 90000 00008',
        parentEmail: 'parent@school.edu',
        address: '42 MG Road, Hyderabad',
        transportRouteId: 'route-12',
        status: 'Active'
    },
    {
        id: 's-102',
        name: 'Rahul Sharma',
        admissionNumber: 'FS-2022-012',
        dob: '2010-03-18',
        classId: 'c-10a',
        className: 'Class 10',
        section: 'A',
        roll: '12',
        parentAccountId: 'account-parent-1',
        parentName: 'Ramesh Sharma',
        parentMobile: '+91 90000 00008',
        parentEmail: 'parent@school.edu',
        address: '42 MG Road, Hyderabad',
        transportRouteId: 'route-12',
        status: 'Active'
    },
    {
        id: 's-103',
        name: 'Anitha Rao',
        admissionNumber: 'FS-2022-019',
        dob: '2011-01-20',
        classId: 'c-9b',
        className: 'Class 9',
        section: 'B',
        roll: '19',
        parentAccountId: 'account-parent-2',
        parentName: 'Sunita Rao',
        parentMobile: '+91 90000 00019',
        parentEmail: 'anitha.parent@school.edu',
        address: '15 Temple Road, Hyderabad',
        transportRouteId: 'route-05',
        status: 'Active'
    },
    {
        id: 's-104',
        name: 'Vikram Patel',
        admissionNumber: 'FS-2026-024',
        dob: '2010-09-09',
        classId: 'c-10a',
        className: 'Class 10',
        section: 'A',
        roll: '24',
        parentAccountId: 'account-parent-3',
        parentName: 'Kavita Patel',
        parentMobile: '+91 90000 00024',
        parentEmail: 'kavita.parent@school.edu',
        address: '88 Lake View, Hyderabad',
        transportRouteId: 'route-12',
        status: 'Pending'
    }
];

const initialTeachers = [
    {
        id: 't-101',
        name: 'Mr. Joseph',
        email: 'teacher@school.edu',
        phone: '+91 98888 00001',
        assignedClassIds: ['c-10a', 'c-9b'],
        assignedSubjects: ['Mathematics', 'Science'],
        active: true
    },
    {
        id: 't-102',
        name: 'Ms. Nair',
        email: 'nair@school.edu',
        phone: '+91 98888 00002',
        assignedClassIds: ['c-9b'],
        assignedSubjects: ['Physics'],
        active: true
    },
    {
        id: 't-103',
        name: 'Mrs. Thomas',
        email: 'thomas@school.edu',
        phone: '+91 98888 00003',
        assignedClassIds: ['c-8a'],
        assignedSubjects: ['English'],
        active: true
    }
];

const initialParents = [
    {
        id: 'account-parent-1',
        name: 'Ramesh Sharma',
        email: 'parent@school.edu',
        phone: '+91 90000 00008',
        linkedStudentIds: ['s-101', 's-102'],
        active: true
    },
    {
        id: 'account-parent-2',
        name: 'Sunita Rao',
        email: 'anitha.parent@school.edu',
        phone: '+91 90000 00019',
        linkedStudentIds: ['s-103'],
        active: true
    },
    {
        id: 'account-parent-3',
        name: 'Kavita Patel',
        email: 'kavita.parent@school.edu',
        phone: '+91 90000 00024',
        linkedStudentIds: ['s-104'],
        active: true
    }
];

const initialTransportRoutes = [
    {
        id: 'route-12',
        routeNumber: 'R-12',
        routeName: 'Chennur - Main Road',
        vehicleNumber: 'TS 28 AB 1456 (School Bus 03)',
        driverName: 'Ramesh Kumar',
        driverContact: '+91 91234 56789',
        coordinatorContact: 'Mrs. Lakshmi (Office Ext 104)',
        pickupPoint: 'Market Junction',
        pickupTime: '07:35 AM',
        dropTime: '03:45 PM',
        status: 'Active route',
        stops: [
            { time: '07:25 AM', stop: 'Ramakrishna Nagar' },
            { time: '07:35 AM', stop: 'Market Junction', active: true },
            { time: '07:48 AM', stop: 'FutureSchool Main Gate' }
        ]
    },
    {
        id: 'route-05',
        routeNumber: 'R-05',
        routeName: 'Temple Road - Secunderabad',
        vehicleNumber: 'TS 09 XY 4321 (School Bus 01)',
        driverName: 'Suresh Reddy',
        driverContact: '+91 91234 56788',
        coordinatorContact: 'Mrs. Lakshmi (Office Ext 104)',
        pickupPoint: 'Temple Arch',
        pickupTime: '07:45 AM',
        dropTime: '03:55 PM',
        status: 'Active route',
        stops: [
            { time: '07:30 AM', stop: 'Secunderabad Station' },
            { time: '07:45 AM', stop: 'Temple Arch', active: true },
            { time: '08:00 AM', stop: 'FutureSchool Main Gate' }
        ]
    }
];

const todayISO = new Date().toISOString().slice(0, 10);
const initialAttendance = [
    { id: 's-101_' + todayISO, studentId: 's-101', classId: 'c-10a', date: todayISO, status: 'Present', teacher: 'Mr. Joseph', reason: '' },
    { id: 's-102_' + todayISO, studentId: 's-102', classId: 'c-10a', date: todayISO, status: 'Present', teacher: 'Mr. Joseph', reason: '' },
    { id: 's-103_' + todayISO, studentId: 's-103', classId: 'c-9b', date: todayISO, status: 'Absent', teacher: 'Ms. Nair', reason: 'Unwell' },
    { id: 's-101_2026-10-13', studentId: 's-101', classId: 'c-10a', date: '2026-10-13', status: 'Present', teacher: 'Mr. Joseph', reason: '' },
    { id: 's-102_2026-10-13', studentId: 's-102', classId: 'c-10a', date: '2026-10-13', status: 'Late', teacher: 'Mr. Joseph', reason: 'Traffic delay' },
    { id: 's-101_2026-10-12', studentId: 's-101', classId: 'c-10a', date: '2026-10-12', status: 'Present', teacher: 'Mr. Joseph', reason: '' },
    { id: 's-102_2026-10-12', studentId: 's-102', classId: 'c-10a', date: '2026-10-12', status: 'Present', teacher: 'Mr. Joseph', reason: '' },
    { id: 's-101_2026-10-11', studentId: 's-101', classId: 'c-10a', date: '2026-10-11', status: 'Present', teacher: 'Mr. Joseph', reason: '' },
    { id: 's-102_2026-10-11', studentId: 's-102', classId: 'c-10a', date: '2026-10-11', status: 'Present', teacher: 'Mr. Joseph', reason: '' }
];

const initialHomework = [
    {
        id: 'hw-101',
        classId: 'c-10a',
        className: 'Class 10-A',
        subject: 'Mathematics',
        title: 'Quadratic Equations Exercise 4.2',
        instructions: 'Solve problems 1 through 10 from NCERT textbook Chapter 4. Show step-by-step factorization.',
        dueDate: '2026-10-25',
        attachment: 'quadratic_equations_notes.pdf',
        status: 'Published',
        createdAt: '2026-10-10',
        submissions: [
            {
                studentId: 's-101',
                studentName: 'Aanya Sharma',
                response: 'Completed all 10 problems. Verified roots using quadratic formula.',
                attachmentName: 'aanya_math_hw.pdf',
                submittedAt: '2026-10-12T14:30:00Z',
                status: 'Reviewed',
                feedback: 'Excellent work! Step 4 in problem 7 was especially neat.'
            },
            {
                studentId: 's-102',
                studentName: 'Rahul Sharma',
                response: 'Solved questions 1 to 8. Working on questions 9 and 10.',
                attachmentName: 'rahul_math_hw.pdf',
                submittedAt: '2026-10-13T10:15:00Z',
                status: 'Submitted',
                feedback: ''
            }
        ]
    },
    {
        id: 'hw-102',
        classId: 'c-10a',
        className: 'Class 10-A',
        subject: 'Science',
        title: 'Light and Reflection Ray Diagrams',
        instructions: 'Draw ray diagrams for concave and convex mirrors at different object distances.',
        dueDate: '2026-10-26',
        attachment: 'ray_diagram_guidelines.pdf',
        status: 'Published',
        createdAt: '2026-10-11',
        submissions: [
            {
                studentId: 's-101',
                studentName: 'Aanya Sharma',
                response: 'Hand-drawn diagrams scanned and labeled with focal lengths and center of curvature.',
                attachmentName: 'aanya_physics_diagrams.pdf',
                submittedAt: '2026-10-13T11:00:00Z',
                status: 'Submitted',
                feedback: ''
            }
        ]
    },
    {
        id: 'hw-103',
        classId: 'c-9b',
        className: 'Class 9-B',
        subject: 'Physics',
        title: 'Gravitation & Mass vs Weight',
        instructions: 'Answer short questions on free fall and calculation of weight on Moon.',
        dueDate: '2026-10-24',
        attachment: 'gravitation_worksheet.pdf',
        status: 'Published',
        createdAt: '2026-10-11',
        submissions: [
            {
                studentId: 's-103',
                studentName: 'Anitha Rao',
                response: 'Answers written in notebook.',
                attachmentName: 'anitha_physics_hw.pdf',
                submittedAt: '2026-10-13T15:00:00Z',
                status: 'Submitted',
                feedback: ''
            }
        ]
    }
];

const initialMarks = [
    {
        id: 'm_s101_c10a_Mathematics_Unit Test 2',
        studentId: 's-101',
        studentName: 'Aanya Sharma',
        classId: 'c-10a',
        subject: 'Mathematics',
        exam: 'Unit Test 2',
        maximumMarks: 100,
        score: 86,
        percentage: 86,
        grade: 'A',
        status: 'Published',
        savedAt: '2026-10-10T12:00:00Z'
    },
    {
        id: 'm_s101_c10a_Science_Unit Test 2',
        studentId: 's-101',
        studentName: 'Aanya Sharma',
        classId: 'c-10a',
        subject: 'Science',
        exam: 'Unit Test 2',
        maximumMarks: 100,
        score: 92,
        percentage: 92,
        grade: 'A+',
        status: 'Published',
        savedAt: '2026-10-10T12:00:00Z'
    },
    {
        id: 'm_s101_c10a_English_Unit Test 2',
        studentId: 's-101',
        studentName: 'Aanya Sharma',
        classId: 'c-10a',
        subject: 'English',
        exam: 'Unit Test 2',
        maximumMarks: 100,
        score: 81,
        percentage: 81,
        grade: 'A',
        status: 'Published',
        savedAt: '2026-10-10T12:00:00Z'
    },
    {
        id: 'm_s102_c10a_Mathematics_Unit Test 2',
        studentId: 's-102',
        studentName: 'Rahul Sharma',
        classId: 'c-10a',
        subject: 'Mathematics',
        exam: 'Unit Test 2',
        maximumMarks: 100,
        score: 74,
        percentage: 74,
        grade: 'B',
        status: 'Published',
        savedAt: '2026-10-10T12:00:00Z'
    },
    {
        id: 'm_s102_c10a_Science_Unit Test 2',
        studentId: 's-102',
        studentName: 'Rahul Sharma',
        classId: 'c-10a',
        subject: 'Science',
        exam: 'Unit Test 2',
        maximumMarks: 100,
        score: 78,
        percentage: 78,
        grade: 'B',
        status: 'Published',
        savedAt: '2026-10-10T12:00:00Z'
    },
    {
        id: 'm_s103_c9b_Mathematics_Unit Test 2',
        studentId: 's-103',
        studentName: 'Anitha Rao',
        classId: 'c-9b',
        subject: 'Mathematics',
        exam: 'Unit Test 2',
        maximumMarks: 100,
        score: 92,
        percentage: 92,
        grade: 'A+',
        status: 'Published',
        savedAt: '2026-10-10T12:00:00Z'
    }
];

const initialFeeInvoices = [
    {
        id: 'inv-s101-term2',
        invoiceId: 'TERM-2026-02-AANYA',
        studentId: 's-101',
        studentName: 'Aanya Sharma',
        classId: 'c-10a',
        category: 'Term 2 Tuition Fee',
        amount: 12500,
        dueDate: '2026-10-30',
        status: 'Pending'
    },
    {
        id: 'inv-s102-term2',
        invoiceId: 'TERM-2026-02-RAHUL',
        studentId: 's-102',
        studentName: 'Rahul Sharma',
        classId: 'c-10a',
        category: 'Term 2 Tuition Fee',
        amount: 12500,
        dueDate: '2026-10-30',
        status: 'Paid'
    },
    {
        id: 'inv-s103-term2',
        invoiceId: 'TERM-2026-02-ANITHA',
        studentId: 's-103',
        studentName: 'Anitha Rao',
        classId: 'c-9b',
        category: 'Term 2 Tuition Fee',
        amount: 12500,
        dueDate: '2026-09-15',
        status: 'Pending'
    }
];

const initialPayments = [
    {
        id: 'pay-2026-001',
        invoiceId: 'TERM-2026-02-RAHUL',
        studentId: 's-102',
        parentAccountId: 'account-parent-1',
        amount: 12500,
        paymentMethod: 'UPI',
        transactionReference: 'UPI-982348123',
        paidAt: '2026-10-12T09:30:00Z'
    }
];

const initialNotifications = [
    {
        id: 'notif-1',
        type: 'General Notice',
        audience: 'All',
        studentId: null,
        classId: null,
        title: 'Annual Sports Day 2026',
        message: 'Annual sports day will be held on 28th October. Permission forms due Friday.',
        createdAt: '2026-10-11T10:00:00Z',
        read: false
    },
    {
        id: 'notif-2',
        type: 'Attendance Alert',
        audience: 'Parents',
        studentId: 's-103',
        classId: 'c-9b',
        title: 'Absence Notice',
        message: 'Your child Anitha Rao was marked absent today.',
        createdAt: '2026-10-12T09:15:00Z',
        read: false
    },
    {
        id: 'notif-3',
        type: 'Fee Reminder',
        audience: 'Parents',
        studentId: 's-103',
        classId: 'c-9b',
        title: 'Fee Payment Reminder',
        message: 'Term 2 fees for Anitha Rao are past due. Kindly clear the outstanding dues.',
        createdAt: '2026-10-13T10:00:00Z',
        read: false
    }
];

const initialQuizzes = [
    {
        id: 'quiz-algebra-1',
        title: 'Algebra and Quadratic Check-in',
        subject: 'Mathematics',
        targetClass: 'c-10a',
        targetClassName: 'Class 10-A',
        dueDate: '2026-10-25',
        retryAllowed: true,
        status: 'Published',
        teacherId: 't-101',
        teacherName: 'Mr. Joseph',
        questions: [
            {
                id: 'q1',
                question: 'What is 12 x 8?',
                options: ['86', '96', '108', '112'],
                answer: '96',
                explanation: '12 multiplied by 8 equals 96.',
                marks: 2
            },
            {
                id: 'q2',
                question: 'What is the value of x in 2x + 6 = 14?',
                options: ['2', '3', '4', '5'],
                answer: '4',
                explanation: '2x = 14 - 6 = 8, so x = 4.',
                marks: 2
            },
            {
                id: 'q3',
                question: 'Which number is a prime number?',
                options: ['21', '27', '31', '39'],
                answer: '31',
                explanation: '31 has no factors other than 1 and itself.',
                marks: 2
            }
        ]
    }
];

const initialQuizAttempts = [
    {
        id: 'attempt-1',
        quizId: 'quiz-algebra-1',
        studentId: 's-101',
        studentName: 'Aanya Sharma',
        score: 6,
        maxScore: 6,
        percentage: 100,
        submittedAt: '2026-10-12T16:00:00Z',
        answers: { 'q1': '96', 'q2': '4', 'q3': '31' }
    }
];

const initialMeetings = [
    {
        id: 'meet-1',
        parentAccountId: 'account-parent-1',
        parentName: 'Ramesh Sharma',
        studentId: 's-101',
        studentName: 'Aanya Sharma',
        teacherId: 't-101',
        teacherName: 'Mr. Joseph',
        preferredDate: '2026-10-18',
        preferredTime: '10:30 AM',
        purpose: 'Discuss Term 2 mathematics performance and science practical assessments.',
        status: 'Confirmed',
        createdAt: '2026-10-10T11:00:00Z'
    }
];

const initialDigitalLibrary = [
    { id: 'lib-1', title: 'The Alchemist', author: 'Paulo Coelho', subject: 'fiction', type: 'book', available: true },
    { id: 'lib-2', title: 'Concepts of Physics (Vol 1)', author: 'H.C. Verma', subject: 'physics', type: 'book', available: true },
    { id: 'lib-3', title: 'Oxford English Grammar Guide', author: 'John Eastwood', subject: 'english', type: 'pdf', available: true },
    { id: 'lib-4', title: 'Foundation Mathematics Class 10', author: 'R.D. Sharma', subject: 'mathematics', type: 'book', available: true },
    { id: 'lib-5', title: 'NCERT Exemplar Science Class 10', author: 'NCERT Board', subject: 'physics', type: 'pdf', available: true },
    { id: 'lib-6', title: 'Comprehensive Chemistry Notes', author: 'Science Faculty', subject: 'physics', type: 'doc', available: true }
];

const initialSchoolSettings = {
    name: 'FutureSchool',
    initials: 'FS',
    tagline: 'One calm place for your whole school.',
    principal: 'Dr. Meera Rao',
    phone: '+91 90000 00000',
    email: 'office@school.edu',
    address: '42 Knowledge Corridor, Hyderabad, Telangana',
    color: '#087f73'
};

// Store Helper Functions
function getStore(key, fallback) {
    const data = localStorage.getItem(key);
    if (data) {
        try {
            return JSON.parse(data);
        } catch (e) {
            console.error(`Error parsing localStorage key: ${key}`, e);
        }
    }
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
}

function saveStore(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Global In-Memory State
let accountRecords = getStore('futureschoolAccounts', initialAccounts);
let classes = getStore('classes', initialClasses);
let students = getStore('students', initialStudents);
let teachers = getStore('teachers', initialTeachers);
let parents = getStore('parents', initialParents);
let transportRoutes = getStore('transportRoutes', initialTransportRoutes);
let attendanceRecords = getStore('attendance', initialAttendance);
let homeworkRecords = getStore('homework', initialHomework);
let marksRecords = getStore('marks', initialMarks);
let feeInvoices = getStore('feeInvoices', initialFeeInvoices);
let paymentRecords = getStore('payments', initialPayments);
let notificationRecords = getStore('notifications', initialNotifications);
let publishedQuizzes = getStore('futureschoolQuizzes', initialQuizzes);
let quizAttempts = getStore('futureschoolQuizAttempts', initialQuizAttempts);
let parentMeetings = getStore('parentMeetings', initialMeetings);
let digitalLibrary = getStore('digitalLibrary', initialDigitalLibrary);
let libraryTransactions = getStore('libraryTransactions', []);
let schoolSettings = getStore('schoolSettings', initialSchoolSettings);

let currentRole = '';
let currentAccount = null;
let currentAccess = [];

// Section 3: Essential Helper Functions
function getCurrentStudent() {
    if (currentRole === 'student') {
        return students.find((s) => s.id === currentAccount.studentId || s.id === currentAccount.id) || students[0];
    }
    if (currentRole === 'parent') {
        return getSelectedParentChild();
    }
    return students[0] || null;
}

function getLinkedStudentsForParent(parentAccount = currentAccount) {
    if (!parentAccount || parentAccount.role !== 'parent') return [];
    if (parentAccount.linkedStudentIds && parentAccount.linkedStudentIds.length) {
        return students.filter((s) => parentAccount.linkedStudentIds.includes(s.id));
    }
    return students.filter((s) => s.parentAccountId === parentAccount.id);
}

function getSelectedParentChild() {
    const linked = getLinkedStudentsForParent();
    if (!linked.length) return students[0] || null;
    const savedId = localStorage.getItem('futureschoolSelectedChildId');
    const matched = linked.find((s) => s.id === savedId);
    if (matched) return matched;
    localStorage.setItem('futureschoolSelectedChildId', linked[0].id);
    return linked[0];
}

function getTeacherClasses(teacherAccount = currentAccount) {
    if (!teacherAccount || teacherAccount.role !== 'teacher') return [];
    const assignedIds = teacherAccount.assignedClassIds || [];
    return classes.filter((c) => assignedIds.includes(c.id) || c.teacherId === teacherAccount.teacherId);
}

function getStudentClassId(studentId) {
    const student = students.find((s) => s.id === studentId);
    return student ? student.classId : null;
}

function getStudentInvoices(studentId) {
    return feeInvoices.filter((inv) => inv.studentId === studentId);
}

function getStudentNotifications(studentId, classId) {
    return notificationRecords.filter((n) => {
        if (n.audience === 'All') return true;
        if (currentRole === 'parent' && n.audience === 'Parents') return true;
        if (currentRole === 'student' && n.audience === 'Students') return true;
        if (n.studentId && n.studentId === studentId) return true;
        if (n.classId && n.classId === classId) return true;
        return false;
    });
}

function escapeHtml(text) {
    if (text === null || text === undefined) return '';
    return String(text).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

// Authentication & Session
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const role = document.getElementById('login-role').value;
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    const loginMessage = document.getElementById('login-message');

    const account = accountRecords.find((rec) => rec.role === role && rec.email.toLowerCase() === email && rec.password === password);

    if (!account) {
        loginMessage.textContent = `Invalid credentials for ${role} account. Check demo credentials below.`;
        loginMessage.className = 'form-message error';
        return;
    }

    if (!account.active) {
        loginMessage.textContent = 'This account has been deactivated. Academic records remain safe.';
        loginMessage.className = 'form-message error';
        return;
    }

    currentRole = role;
    currentAccount = account;
    currentAccess = [...roleProfiles[role].access];

    document.getElementById('user-role').textContent = role.charAt(0).toUpperCase() + role.slice(1);
    document.getElementById('user-avatar').textContent = account.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
    loginMessage.textContent = '';
    loginMessage.className = 'form-message';

    renderSidebarNavigation();
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');

    applyRoleView();
    showPage(roleProfiles[role].startPage);
});

function logout() {
    currentRole = '';
    currentAccount = null;
    currentAccess = [];
    document.getElementById('app').classList.add('hidden');
    document.getElementById('login-page').classList.remove('hidden');
    document.getElementById('login-form').reset();
    document.getElementById('login-message').textContent = '';
}

function goHome(event) {
    if (event) event.preventDefault();
    if (currentRole) {
        showPage(roleProfiles[currentRole].startPage);
    }
}

// Section 1 & 2: Navigation Rendering & Access Enforcement
function renderSidebarNavigation() {
    const sideNav = document.getElementById('side-nav');
    if (!sideNav) return;
    sideNav.innerHTML = '';

    const groups = roleNavConfig[currentRole] || [];

    groups.forEach((group) => {
        const visibleItems = group.items.filter((item) => currentAccess.includes(item.page));
        if (visibleItems.length === 0) return;

        const groupDiv = document.createElement('div');
        groupDiv.className = 'sidebar-group';

        const heading = document.createElement('p');
        heading.className = 'sidebar-group-heading';
        heading.textContent = group.heading;
        groupDiv.appendChild(heading);

        visibleItems.forEach((item) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.dataset.page = item.page;
            btn.onclick = () => showPage(item.page);

            const labelSpan = document.createElement('span');
            labelSpan.textContent = item.label;
            btn.appendChild(labelSpan);

            if (item.badge) {
                const badge = document.createElement('span');
                badge.className = 'module-badge';
                badge.textContent = item.badge;
                btn.appendChild(badge);
            }

            groupDiv.appendChild(btn);
        });

        sideNav.appendChild(groupDiv);

        const divider = document.createElement('div');
        divider.className = 'sidebar-divider';
        sideNav.appendChild(divider);
    });
}

function showPage(pageName) {
    // Section 1: Block unauthorized access in showPage(), even when passed manually from console
    if (!currentRole || !currentAccess.includes(pageName)) {
        console.warn(`Access denied to page "${pageName}" for role "${currentRole}"`);
        return;
    }

    const pages = document.querySelectorAll('.page');
    pages.forEach((p) => p.classList.toggle('active-page', p.id === `page-${pageName}`));

    const navButtons = document.querySelectorAll('.side-nav button');
    navButtons.forEach((b) => b.classList.toggle('active', b.dataset.page === pageName));

    const activeBtn = document.querySelector(`.side-nav button[data-page="${pageName}"]`);
    if (activeBtn) {
        const label = activeBtn.querySelector('span')?.textContent || 'Workspace';
        document.getElementById('page-title').textContent = label;
    }

    refreshCurrentPageView(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Unified Role View Dispatcher
function applyRoleView() {
    applySchoolSettings();

    if (currentRole === 'admin') {
        renderAdminDashboard();
        renderAdminStudentsTable();
        renderAdminTeachersList();
        renderAdminParentsList();
        renderUserAccountsList();
        renderClassesList();
        renderAdminFeeLedger();
        renderAdminAttendanceReport();
        loadSettingsForm();
    } else if (currentRole === 'teacher') {
        renderTeacherDashboard();
        initTeacherAttendanceView();
        renderTeacherHomeworkList();
        loadTeacherMarksRoster();
        renderTeacherQuizzes();
    } else if (currentRole === 'parent') {
        initParentChildSelector();
        renderParentDashboard();
        renderParentAttendance();
        renderParentHomework();
        renderParentMarks();
        renderParentFees();
        renderParentPaymentsHistory();
        renderParentMeetingHistory();
    } else if (currentRole === 'student') {
        renderStudentDashboard();
        renderStudentAttendance();
        renderStudentHomework();
        renderStudentMarks();
        initStudentTutor();
        renderStudentQuizzes();
    }

    // Role-specific element visibility switches
    const isTeacher = currentRole === 'teacher';
    const isAdmin = currentRole === 'admin';
    const isParent = currentRole === 'parent';
    const isStudent = currentRole === 'student';

    // Attendance View Switches
    document.getElementById('teacher-attendance-view')?.classList.toggle('hidden', !isTeacher);
    document.getElementById('admin-attendance-view')?.classList.toggle('hidden', !isAdmin);
    document.getElementById('student-attendance-view')?.classList.toggle('hidden', !isStudent);
    document.getElementById('parent-attendance-view')?.classList.toggle('hidden', !isParent);

    // Homework View Switches
    document.getElementById('teacher-homework-view')?.classList.toggle('hidden', !isTeacher);
    document.getElementById('admin-homework-view')?.classList.toggle('hidden', !isAdmin);
    document.getElementById('student-homework-view')?.classList.toggle('hidden', !isStudent);
    document.getElementById('parent-homework-view')?.classList.toggle('hidden', !isParent);

    // Marks View Switches
    document.getElementById('teacher-marks-view')?.classList.toggle('hidden', !isTeacher);
    document.getElementById('admin-marks-view')?.classList.toggle('hidden', !isAdmin);
    document.getElementById('student-marks-view')?.classList.toggle('hidden', !isStudent);
    document.getElementById('parent-marks-view')?.classList.toggle('hidden', !isParent);

    // Fees View Switches
    document.getElementById('admin-fees-view')?.classList.toggle('hidden', !isAdmin);
    document.getElementById('parent-fees-view')?.classList.toggle('hidden', !isParent);

    // Quizzes View Switches
    document.getElementById('teacher-quiz-view')?.classList.toggle('hidden', !isTeacher);
    document.getElementById('student-quiz-view')?.classList.toggle('hidden', !isStudent);

    // Reports View Switches
    const reportManager = document.getElementById('report-manager');
    const reportReader = document.getElementById('report-reader');
    if (isTeacher || isAdmin) {
        reportManager?.classList.remove('hidden');
        reportReader?.classList.add('hidden');
        populateReportStudentSelect();
    } else {
        reportManager?.classList.add('hidden');
        reportReader?.classList.remove('hidden');
        const activeStudent = getCurrentStudent();
        if (activeStudent) renderOfficialReportCard(reportReader, activeStudent.id);
    }

    // Transport Subtitle & Route
    renderTransportInfo();

    // Populate dropdown options across all relevant forms
    populateClassDropdowns();
    populateNotificationAudienceSelectors();
}

function refreshCurrentPageView(pageName) {
    if (pageName === 'admin-dashboard') renderAdminDashboard();
    if (pageName === 'admin-students') renderAdminStudentsTable();
    if (pageName === 'admin-teachers') renderAdminTeachersList();
    if (pageName === 'admin-parents') renderAdminParentsList();
    if (pageName === 'admin') renderUserAccountsList();
    if (pageName === 'classes') renderClassesList();
    if (pageName === 'admin-payments') renderAdminPaymentsTable();
    if (pageName === 'admin-defaulters') renderAdminDefaultersTable();
    if (pageName === 'teacher') renderTeacherDashboard();
    if (pageName === 'teacher-students') renderTeacherStudentsRoster();
    if (pageName === 'parent') renderParentDashboard();
    if (pageName === 'parent-payments') renderParentPaymentsHistory();
    if (pageName === 'student') renderStudentDashboard();
    if (pageName === 'attendance') {
        if (currentRole === 'teacher') initTeacherAttendanceView();
        if (currentRole === 'admin') renderAdminAttendanceReport();
        if (currentRole === 'student') renderStudentAttendance();
        if (currentRole === 'parent') renderParentAttendance();
    }
    if (pageName === 'homework') {
        if (currentRole === 'teacher') renderTeacherHomeworkList();
        if (currentRole === 'admin') renderAdminHomeworkList();
        if (currentRole === 'student') renderStudentHomework();
        if (currentRole === 'parent') renderParentHomework();
    }
    if (pageName === 'marks') {
        if (currentRole === 'teacher') loadTeacherMarksRoster();
        if (currentRole === 'admin') renderAdminMarksTable();
        if (currentRole === 'student') renderStudentMarks();
        if (currentRole === 'parent') renderParentMarks();
    }
    if (pageName === 'reports') {
        if (currentRole === 'student' || currentRole === 'parent') {
            const activeStudent = getCurrentStudent();
            if (activeStudent) renderOfficialReportCard(document.getElementById('report-reader'), activeStudent.id);
        }
    }
    if (pageName === 'fees') {
        if (currentRole === 'admin') renderAdminFeeLedger();
        if (currentRole === 'parent') renderParentFees();
    }
    if (pageName === 'notifications') renderNotificationsList();
    if (pageName === 'questions') {
        if (currentRole === 'teacher') renderTeacherQuizzes();
        if (currentRole === 'student') renderStudentQuizzes();
    }
    if (pageName === 'library') filterLibrary();
    if (pageName === 'transport') renderTransportInfo();
}

// Section 4: Multiple-Child Support for Parents
function initParentChildSelector() {
    const container = document.getElementById('parent-child-selector-container');
    const select = document.getElementById('parent-child-select');
    if (!container || !select) return;

    const linked = getLinkedStudentsForParent();
    select.innerHTML = linked.map((s) => `<option value="${s.id}">${escapeHtml(s.name)} (${escapeHtml(s.className)}-${escapeHtml(s.section)})</option>`).join('');

    const currentChild = getSelectedParentChild();
    if (currentChild) select.value = currentChild.id;
}

function onParentChildChange(childId) {
    localStorage.setItem('futureschoolSelectedChildId', childId);
    renderParentDashboard();
    renderParentAttendance();
    renderParentHomework();
    renderParentMarks();
    renderParentFees();
    renderParentPaymentsHistory();
    renderParentMeetingHistory();
    renderTransportInfo();
    const reportReader = document.getElementById('report-reader');
    if (reportReader && !reportReader.classList.contains('hidden')) {
        renderOfficialReportCard(reportReader, childId);
    }
}

function renderParentDashboard() {
    const child = getSelectedParentChild();
    if (!child) return;

    document.getElementById('parent-child-name').textContent = child.name;
    document.getElementById('parent-child-class').textContent = `${child.className}-${child.section} · Roll No. ${child.roll}`;
    document.getElementById('parent-child-avatar').textContent = child.name.split(' ').map((n) => n[0]).join('').slice(0, 2);

    // Today's attendance status
    const todayRec = attendanceRecords.find((rec) => rec.studentId === child.id && rec.date === todayISO);
    const todayStatusBadge = document.getElementById('parent-child-today-status');
    if (!todayRec) {
        todayStatusBadge.textContent = 'Attendance not marked';
        todayStatusBadge.className = 'status pending';
    } else if (todayRec.status === 'Present') {
        todayStatusBadge.textContent = 'Present today';
        todayStatusBadge.className = 'status present';
    } else if (todayRec.status === 'Absent') {
        todayStatusBadge.textContent = 'Absent today';
        todayStatusBadge.className = 'status absent';
    } else if (todayRec.status === 'Late') {
        todayStatusBadge.textContent = 'Late today';
        todayStatusBadge.className = 'status late';
    }

    // Attendance Rate
    const childAtts = attendanceRecords.filter((rec) => rec.studentId === child.id);
    const attended = childAtts.filter((r) => r.status === 'Present' || r.status === 'Late').length;
    const rate = childAtts.length ? Math.round((attended / childAtts.length) * 100) : 0;
    document.getElementById('parent-child-attendance-pct').textContent = `${rate}% (${attended}/${childAtts.length} days)`;

    // Fee balance
    const invoices = getStudentInvoices(child.id);
    const pendingTotal = invoices.filter((inv) => inv.status !== 'Paid' && !paymentRecords.some((p) => p.invoiceId === inv.invoiceId && p.studentId === child.id)).reduce((sum, inv) => sum + Number(inv.amount), 0);
    const feeBadge = document.getElementById('parent-dashboard-fee-status');
    const feeText = document.getElementById('parent-dashboard-fee-text');
    if (pendingTotal > 0) {
        feeBadge.textContent = `₹${pendingTotal.toLocaleString('en-IN')} pending`;
        feeBadge.className = 'status pending';
        feeText.textContent = `Term balance outstanding for ${child.name}.`;
    } else {
        feeBadge.textContent = 'All fees clear';
        feeBadge.className = 'status paid';
        feeText.textContent = 'No outstanding fee invoices.';
    }

    // Homework preview
    const classHw = homeworkRecords.filter((h) => h.classId === child.classId && h.status === 'Published');
    document.getElementById('parent-dashboard-hw-badge').textContent = `${classHw.length} active`;
    const hwPreview = document.getElementById('parent-dashboard-hw-preview');
    if (classHw.length) {
        hwPreview.innerHTML = classHw.slice(0, 2).map((hw) => {
            const sub = hw.submissions?.find((s) => s.studentId === child.id);
            return `<p><b>${escapeHtml(hw.title)}</b><br><span class="muted">${escapeHtml(hw.subject)} · Due ${escapeHtml(hw.dueDate)}</span><br><small class="grade">${sub ? escapeHtml(sub.status) : 'Pending submission'}</small></p>`;
        }).join('');
    } else {
        hwPreview.innerHTML = '<p class="muted">No pending homework assignments.</p>';
    }

    // Notices preview
    const noticesList = document.getElementById('parent-notices-preview');
    const relevantNotices = getStudentNotifications(child.id, child.classId).slice(-3).reverse();
    if (relevantNotices.length) {
        noticesList.innerHTML = relevantNotices.map((n) => `<div class="notice"><b>${escapeHtml(n.title)}</b><span>${escapeHtml(n.message)}</span></div>`).join('');
    } else {
        noticesList.innerHTML = '<p class="muted">No new circulars or notices.</p>';
    }
}

// Section 5: Admin Portal & Management Pages
function renderAdminDashboard() {
    const totalStudents = students.filter((s) => s.status === 'Active').length;
    const totalTeachers = teachers.filter((t) => t.active).length;
    const totalParents = parents.filter((p) => p.active).length;
    const totalClasses = classes.filter((c) => c.active).length;
    const pendingAdmissions = students.filter((s) => s.status === 'Pending').length;

    // Zero-safe dashboard counts
    document.getElementById('admin-total-students').textContent = totalStudents;
    document.getElementById('admin-total-teachers').textContent = totalTeachers;
    document.getElementById('admin-total-parents').textContent = totalParents;
    document.getElementById('admin-total-classes').textContent = totalClasses;
    document.getElementById('admin-pending-admissions').textContent = pendingAdmissions;

    // Today's attendance calculation
    const todayRecords = attendanceRecords.filter((r) => r.date === todayISO);
    const classesWithAttendance = new Set(todayRecords.map((r) => r.classId));
    const activeClassesList = classes.filter((c) => c.active);
    const attendanceRate = todayRecords.length ? Math.round((todayRecords.filter((r) => r.status === 'Present' || r.status === 'Late').length / todayRecords.length) * 100) : 0;

    document.getElementById('admin-attendance-rate').textContent = `${attendanceRate}%`;
    document.getElementById('admin-attendance-status-label').textContent = `Submitted by ${classesWithAttendance.size} / ${activeClassesList.length} classes`;

    // Financial Totals
    const paidSum = paymentRecords.reduce((sum, p) => sum + Number(p.amount), 0);
    const billedSum = feeInvoices.reduce((sum, inv) => sum + Number(inv.amount), 0);
    const pendingSum = Math.max(0, billedSum - paidSum);

    document.getElementById('admin-fees-collected').textContent = `₹${paidSum.toLocaleString('en-IN')}`;
    document.getElementById('admin-fees-pending').textContent = `₹${pendingSum.toLocaleString('en-IN')}`;

    // Panel 1: Classes that have not submitted attendance today
    const unsubmittedClasses = activeClassesList.filter((c) => !classesWithAttendance.has(c.id));
    const unsubmittedListEl = document.getElementById('admin-unsubmitted-attendance-list');
    if (unsubmittedClasses.length) {
        unsubmittedListEl.innerHTML = unsubmittedClasses.map((c) => `<div><b>${escapeHtml(c.name)} · Section ${escapeHtml(c.section)}</b><span>Class Teacher: ${escapeHtml(c.teacherName)}</span></div>`).join('');
    } else {
        unsubmittedListEl.innerHTML = '<p class="muted">All active classes have submitted today\'s attendance.</p>';
    }

    // Panel 2: Recent Payments
    const recentPaymentsEl = document.getElementById('admin-recent-payments-list');
    if (paymentRecords.length) {
        recentPaymentsEl.innerHTML = paymentRecords.slice(-3).reverse().map((p) => {
            const student = students.find((s) => s.id === p.studentId);
            return `<div><b>₹${Number(p.amount).toLocaleString('en-IN')} via ${escapeHtml(p.paymentMethod)}</b><span>${student ? escapeHtml(student.name) : 'Student'} · ${new Date(p.paidAt).toLocaleDateString('en-GB')}</span></div>`;
        }).join('');
    } else {
        recentPaymentsEl.innerHTML = '<p class="muted">No payment transactions recorded yet.</p>';
    }

    // Panel 3: Fee Defaulters Preview
    const defaultersEl = document.getElementById('admin-defaulters-preview');
    const overdueInvoices = feeInvoices.filter((inv) => inv.dueDate < todayISO && inv.status !== 'Paid' && !paymentRecords.some((p) => p.invoiceId === inv.invoiceId && p.studentId === inv.studentId));
    if (overdueInvoices.length) {
        defaultersEl.innerHTML = overdueInvoices.slice(0, 3).map((inv) => `<div><b>${escapeHtml(inv.studentName)}</b><span>₹${Number(inv.amount).toLocaleString('en-IN')} overdue since ${escapeHtml(inv.dueDate)}</span></div>`).join('');
    } else {
        defaultersEl.innerHTML = '<p class="muted">No overdue fee balances recorded.</p>';
    }

    // Panel 4: Pending Admissions
    const admissionsEl = document.getElementById('admin-admissions-list');
    const pendingStudents = students.filter((s) => s.status === 'Pending');
    if (pendingStudents.length) {
        admissionsEl.innerHTML = pendingStudents.map((s) => `<div><b>${escapeHtml(s.name)}</b><span>${escapeHtml(s.className)}-${escapeHtml(s.section)} · Parent: ${escapeHtml(s.parentName)}</span></div>`).join('');
    } else {
        admissionsEl.innerHTML = '<p class="muted">No pending admission applications.</p>';
    }

    // Panel 5: Pending Report-card Publication
    const pendingReportsEl = document.getElementById('admin-pending-reports-list');
    const draftMarks = marksRecords.filter((m) => m.status === 'Draft');
    if (draftMarks.length) {
        const draftSubjects = [...new Set(draftMarks.map((m) => `${m.exam} - ${m.subject}`))];
        pendingReportsEl.innerHTML = draftSubjects.map((sub) => `<div><b>${escapeHtml(sub)}</b><span>Draft scores waiting for final review</span></div>`).join('');
    } else {
        pendingReportsEl.innerHTML = '<p class="muted">All entered marks are published.</p>';
    }

    // Panel 6: Recent Notices
    const noticesEl = document.getElementById('admin-recent-notices-list');
    if (notificationRecords.length) {
        noticesEl.innerHTML = notificationRecords.slice(-3).reverse().map((n) => `<div><b>${escapeHtml(n.title)}</b><span>${escapeHtml(n.type)} · Audience: ${escapeHtml(n.audience)}</span></div>`).join('');
    } else {
        noticesEl.innerHTML = '<p class="muted">No announcements published.</p>';
    }
}

// Admin: Students Directory Management
function renderAdminStudentsTable() {
    const query = (document.getElementById('admin-student-search')?.value || '').toLowerCase();
    const tbody = document.querySelector('#admin-students-table tbody');
    if (!tbody) return;

    const filtered = students.filter((s) => s.name.toLowerCase().includes(query) || s.admissionNumber.toLowerCase().includes(query) || `${s.className} ${s.section}`.toLowerCase().includes(query));

    if (!filtered.length) {
        tbody.innerHTML = '<tr><td colspan="8" class="muted">No matching student records found.</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map((s) => {
        const attRecords = attendanceRecords.filter((r) => r.studentId === s.id);
        const attended = attRecords.filter((r) => r.status === 'Present' || r.status === 'Late').length;
        const attRate = attRecords.length ? `${Math.round((attended / attRecords.length) * 100)}% (${attended}/${attRecords.length})` : 'No data';

        const invoices = getStudentInvoices(s.id);
        const pendingFee = invoices.filter((inv) => inv.status !== 'Paid' && !paymentRecords.some((p) => p.invoiceId === inv.invoiceId && p.studentId === s.id)).reduce((sum, inv) => sum + Number(inv.amount), 0);

        return `<tr>
            <td><b>${escapeHtml(s.name)}</b><br><small class="muted">Roll: ${escapeHtml(s.roll)}</small></td>
            <td><code>${escapeHtml(s.admissionNumber)}</code></td>
            <td>${escapeHtml(s.className)}-${escapeHtml(s.section)}</td>
            <td>${escapeHtml(s.parentName)}<br><small class="muted">${escapeHtml(s.parentMobile)}</small></td>
            <td>${attRate}</td>
            <td><strong>₹${pendingFee.toLocaleString('en-IN')}</strong></td>
            <td><span class="status ${s.status === 'Active' ? 'active' : 'inactive'}">${escapeHtml(s.status)}</span></td>
            <td>
                <div class="account-row-actions">
                    <button class="text-button" type="button" onclick="viewStudentProfile('${s.id}')">Profile</button>
                    <button class="text-button" type="button" onclick="toggleStudentStatus('${s.id}')">${s.status === 'Active' ? 'Deactivate' : 'Activate'}</button>
                </div>
            </td>
        </tr>`;
    }).join('');
}

document.getElementById('admin-student-search')?.addEventListener('input', renderAdminStudentsTable);

function viewStudentProfile(studentId) {
    const student = students.find((s) => s.id === studentId);
    if (!student) return;

    const panel = document.getElementById('student-profile-panel');
    const content = document.getElementById('student-profile-content');
    panel.classList.remove('hidden');

    const attRecords = attendanceRecords.filter((r) => r.studentId === student.id);
    const attended = attRecords.filter((r) => r.status === 'Present' || r.status === 'Late').length;
    const lates = attRecords.filter((r) => r.status === 'Late').length;
    const attRate = attRecords.length ? Math.round((attended / attRecords.length) * 100) : 0;

    const invoices = getStudentInvoices(student.id);
    const pendingTotal = invoices.filter((inv) => inv.status !== 'Paid' && !paymentRecords.some((p) => p.invoiceId === inv.invoiceId && p.studentId === student.id)).reduce((sum, inv) => sum + Number(inv.amount), 0);

    content.innerHTML = `
        <div class="two-column">
            <div>
                <h4>Academic & Demographic Details</h4>
                <p><b>Admission Number:</b> ${escapeHtml(student.admissionNumber)}</p>
                <p><b>Date of Birth:</b> ${escapeHtml(student.dob)}</p>
                <p><b>Class Section:</b> ${escapeHtml(student.className)}-${escapeHtml(student.section)}</p>
                <p><b>Roll Number:</b> ${escapeHtml(student.roll)}</p>
                <p><b>Address:</b> ${escapeHtml(student.address)}</p>
                <p><b>Status:</b> <span class="status ${student.status === 'Active' ? 'active' : 'inactive'}">${escapeHtml(student.status)}</span></p>
            </div>
            <div>
                <h4>Family & Financial Summary</h4>
                <p><b>Linked Parent:</b> ${escapeHtml(student.parentName)}</p>
                <p><b>Parent Mobile:</b> ${escapeHtml(student.parentMobile)}</p>
                <p><b>Parent Email:</b> ${escapeHtml(student.parentEmail)}</p>
                <p><b>Attendance Summary:</b> ${attRate}% presence (${attended}/${attRecords.length} sessions, ${lates} late)</p>
                <p><b>Fee Outstanding:</b> ₹${pendingTotal.toLocaleString('en-IN')}</p>
                <p><b>Transport Route:</b> ${escapeHtml(student.transportRouteId)}</p>
            </div>
        </div>
        <div style="margin-top:16px;">
            <label for="edit-student-class"><b>Change Class & Section:</b></label>
            <div style="display:flex; gap:10px; max-width:400px; margin-top:6px;">
                <select id="edit-student-class" class="compact-select">
                    ${classes.map((c) => `<option value="${c.id}" ${c.id === student.classId ? 'selected' : ''}>${escapeHtml(c.name)}-${escapeHtml(c.section)}</option>`).join('')}
                </select>
                <button class="primary-button small" type="button" onclick="updateStudentClass('${student.id}')">Update Class</button>
            </div>
        </div>
    `;
    panel.scrollIntoView({ behavior: 'smooth' });
}

function closeStudentProfile() {
    document.getElementById('student-profile-panel').classList.add('hidden');
}

function updateStudentClass(studentId) {
    const student = students.find((s) => s.id === studentId);
    const newClassId = document.getElementById('edit-student-class').value;
    const targetClass = classes.find((c) => c.id === newClassId);
    if (!student || !targetClass) return;

    student.classId = targetClass.id;
    student.className = targetClass.name;
    student.section = targetClass.section;

    saveStore('students', students);
    renderAdminStudentsTable();
    viewStudentProfile(studentId);
    alert(`Class updated to ${targetClass.name}-${targetClass.section} for ${student.name}.`);
}

function toggleStudentStatus(studentId) {
    const student = students.find((s) => s.id === studentId);
    if (!student || !window.confirm(`Toggle enrolment access for ${student.name}? Academic history remains archived.`)) return;
    student.status = student.status === 'Active' ? 'Inactive' : 'Active';
    saveStore('students', students);
    renderAdminStudentsTable();
    renderAdminDashboard();
}

// Admissions Form
document.getElementById('admission-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const admissionNumber = document.getElementById('admission-number').value.trim();
    if (students.some((s) => s.admissionNumber.toLowerCase() === admissionNumber.toLowerCase())) {
        document.getElementById('admission-message').textContent = 'An admission with this number already exists.';
        document.getElementById('admission-message').className = 'form-message error';
        return;
    }

    const classSelect = document.getElementById('admission-class');
    const selectedClass = classes.find((c) => c.id === classSelect.value) || classes[0];

    const newStudent = {
        id: `s-${Date.now()}`,
        name: document.getElementById('admission-name').value.trim(),
        admissionNumber,
        dob: document.getElementById('admission-dob').value,
        classId: selectedClass.id,
        className: selectedClass.name,
        section: selectedClass.section,
        roll: document.getElementById('admission-roll').value,
        parentAccountId: `account-parent-${Date.now()}`,
        parentName: document.getElementById('admission-parent').value.trim(),
        parentMobile: document.getElementById('admission-mobile').value.trim(),
        parentEmail: document.getElementById('admission-email').value.trim(),
        address: document.getElementById('admission-address').value.trim(),
        transportRouteId: 'route-12',
        status: document.getElementById('admission-status').value
    };

    students.push(newStudent);
    saveStore('students', students);

    // Automatically ensure parent record exists or is created
    let parentRec = parents.find((p) => p.email.toLowerCase() === newStudent.parentEmail.toLowerCase());
    if (parentRec) {
        if (!parentRec.linkedStudentIds.includes(newStudent.id)) {
            parentRec.linkedStudentIds.push(newStudent.id);
            saveStore('parents', parents);
        }
    } else {
        parentRec = {
            id: newStudent.parentAccountId,
            name: newStudent.parentName,
            email: newStudent.parentEmail,
            phone: newStudent.parentMobile,
            linkedStudentIds: [newStudent.id],
            active: true
        };
        parents.push(parentRec);
        saveStore('parents', parents);
    }

    document.getElementById('admission-message').textContent = 'Student admission recorded successfully.';
    document.getElementById('admission-message').className = 'form-message';
    event.target.reset();

    renderAdminDashboard();
    renderAdminStudentsTable();
    renderAdmissionsRosterList();
});

function renderAdmissionsRosterList() {
    const list = document.getElementById('student-record-list');
    if (!list) return;
    list.innerHTML = students.slice(-6).reverse().map((s) => `
        <div class="account-row">
            <div>
                <b>${escapeHtml(s.name)}</b>
                <small>${escapeHtml(s.admissionNumber)} · ${escapeHtml(s.className)}-${escapeHtml(s.section)} · Parent: ${escapeHtml(s.parentName)}</small>
            </div>
            <span class="status ${s.status === 'Active' ? 'active' : 'inactive'}">${escapeHtml(s.status)}</span>
        </div>
    `).join('');
}

// Admin: Teachers Management
function renderAdminTeachersList() {
    const list = document.getElementById('admin-teachers-list');
    const search = (document.getElementById('teacher-search-input')?.value || '').toLowerCase();
    if (!list) return;

    const filtered = teachers.filter((t) => t.name.toLowerCase().includes(search) || t.email.toLowerCase().includes(search));
    if (!filtered.length) {
        list.innerHTML = '<p class="muted">No faculty members found.</p>';
        return;
    }

    list.innerHTML = filtered.map((t) => {
        const classNames = t.assignedClassIds.map((cid) => {
            const c = classes.find((cls) => cls.id === cid);
            return c ? `${c.name}-${c.section}` : cid;
        }).join(', ') || 'None';

        return `<div class="account-row">
            <div>
                <b>${escapeHtml(t.name)}</b>
                <small>${escapeHtml(t.email)} · ${escapeHtml(t.phone)}</small>
                <small class="muted">Classes: ${escapeHtml(classNames)} | Subjects: ${escapeHtml(t.assignedSubjects.join(', '))}</small>
            </div>
            <span class="status ${t.active ? 'active' : 'inactive'}">${t.active ? 'Active' : 'Inactive'}</span>
            <div class="account-row-actions">
                <button class="text-button" type="button" onclick="editTeacher('${t.id}')">Edit</button>
                <button class="text-button" type="button" onclick="toggleTeacherStatus('${t.id}')">${t.active ? 'Deactivate' : 'Activate'}</button>
            </div>
        </div>`;
    }).join('');
}

document.getElementById('teacher-search-input')?.addEventListener('input', renderAdminTeachersList);

document.getElementById('teacher-manage-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = document.getElementById('teacher-manage-id').value;
    const name = document.getElementById('teacher-manage-name').value.trim();
    const email = document.getElementById('teacher-manage-email').value.trim().toLowerCase();
    const phone = document.getElementById('teacher-manage-phone').value.trim();
    const classSelect = document.getElementById('teacher-manage-classes');
    const assignedClassIds = Array.from(classSelect.selectedOptions).map((opt) => opt.value);
    const subjects = document.getElementById('teacher-manage-subjects').value.split(',').map((s) => s.trim()).filter(Boolean);

    if (id) {
        const teacher = teachers.find((t) => t.id === id);
        if (teacher) {
            teacher.name = name;
            teacher.email = email;
            teacher.phone = phone;
            teacher.assignedClassIds = assignedClassIds;
            teacher.assignedSubjects = subjects;
        }
    } else {
        const newTeacher = {
            id: `t-${Date.now()}`,
            name,
            email,
            phone,
            assignedClassIds,
            assignedSubjects: subjects,
            active: true
        };
        teachers.push(newTeacher);
    }

    saveStore('teachers', teachers);
    document.getElementById('teacher-manage-message').textContent = 'Teacher record saved successfully.';
    event.target.reset();
    document.getElementById('teacher-manage-id').value = '';
    document.getElementById('teacher-form-title').textContent = 'Add teacher';
    renderAdminTeachersList();
    renderAdminDashboard();
});

function editTeacher(teacherId) {
    const t = teachers.find((item) => item.id === teacherId);
    if (!t) return;
    document.getElementById('teacher-manage-id').value = t.id;
    document.getElementById('teacher-manage-name').value = t.name;
    document.getElementById('teacher-manage-email').value = t.email;
    document.getElementById('teacher-manage-phone').value = t.phone;
    document.getElementById('teacher-manage-subjects').value = t.assignedSubjects.join(', ');
    const classSelect = document.getElementById('teacher-manage-classes');
    Array.from(classSelect.options).forEach((opt) => {
        opt.selected = t.assignedClassIds.includes(opt.value);
    });
    document.getElementById('teacher-form-title').textContent = `Edit ${t.name}`;
}

function toggleTeacherStatus(teacherId) {
    const teacher = teachers.find((t) => t.id === teacherId);
    if (!teacher || !window.confirm(`Toggle active status for ${teacher.name}?`)) return;
    teacher.active = !teacher.active;
    saveStore('teachers', teachers);
    renderAdminTeachersList();
    renderAdminDashboard();
}

// Admin: Parents Management
function renderAdminParentsList() {
    const list = document.getElementById('admin-parents-list');
    const search = (document.getElementById('parent-search-input')?.value || '').toLowerCase();
    if (!list) return;

    const filtered = parents.filter((p) => p.name.toLowerCase().includes(search) || p.email.toLowerCase().includes(search));
    if (!filtered.length) {
        list.innerHTML = '<p class="muted">No parent records found.</p>';
        return;
    }

    list.innerHTML = filtered.map((p) => {
        const linkedChildren = students.filter((s) => p.linkedStudentIds.includes(s.id)).map((s) => `${s.name} (${s.className}-${s.section})`).join(', ') || 'No linked children';

        return `<div class="account-row">
            <div>
                <b>${escapeHtml(p.name)}</b>
                <small>${escapeHtml(p.email)} · ${escapeHtml(p.phone)}</small>
                <small class="muted">Linked Children: ${escapeHtml(linkedChildren)}</small>
            </div>
            <span class="status ${p.active ? 'active' : 'inactive'}">${p.active ? 'Active' : 'Inactive'}</span>
            <div class="account-row-actions">
                <button class="text-button" type="button" onclick="editParent('${p.id}')">Edit</button>
                <button class="text-button" type="button" onclick="toggleParentStatus('${p.id}')">${p.active ? 'Deactivate' : 'Activate'}</button>
            </div>
        </div>`;
    }).join('');
}

document.getElementById('parent-search-input')?.addEventListener('input', renderAdminParentsList);

document.getElementById('parent-manage-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = document.getElementById('parent-manage-id').value;
    const name = document.getElementById('parent-manage-name').value.trim();
    const email = document.getElementById('parent-manage-email').value.trim().toLowerCase();
    const phone = document.getElementById('parent-manage-phone').value.trim();
    const childrenSelect = document.getElementById('parent-manage-children');
    const linkedStudentIds = Array.from(childrenSelect.selectedOptions).map((opt) => opt.value);

    if (id) {
        const parent = parents.find((p) => p.id === id);
        if (parent) {
            parent.name = name;
            parent.email = email;
            parent.phone = phone;
            parent.linkedStudentIds = linkedStudentIds;
        }
    } else {
        const newParent = {
            id: `account-parent-${Date.now()}`,
            name,
            email,
            phone,
            linkedStudentIds,
            active: true
        };
        parents.push(newParent);
    }

    saveStore('parents', parents);
    document.getElementById('parent-manage-message').textContent = 'Parent record saved successfully.';
    event.target.reset();
    document.getElementById('parent-manage-id').value = '';
    document.getElementById('parent-form-title').textContent = 'Add parent record';
    renderAdminParentsList();
    renderAdminDashboard();
});

function editParent(parentId) {
    const p = parents.find((item) => item.id === parentId);
    if (!p) return;
    document.getElementById('parent-manage-id').value = p.id;
    document.getElementById('parent-manage-name').value = p.name;
    document.getElementById('parent-manage-email').value = p.email;
    document.getElementById('parent-manage-phone').value = p.phone;
    const childrenSelect = document.getElementById('parent-manage-children');
    Array.from(childrenSelect.options).forEach((opt) => {
        opt.selected = p.linkedStudentIds.includes(opt.value);
    });
    document.getElementById('parent-form-title').textContent = `Edit ${p.name}`;
}

function toggleParentStatus(parentId) {
    const parent = parents.find((p) => p.id === parentId);
    if (!parent || !window.confirm(`Toggle portal access for ${parent.name}?`)) return;
    parent.active = !parent.active;
    saveStore('parents', parents);
    renderAdminParentsList();
    renderAdminDashboard();
}

// Admin: User Accounts Management (Section 5)
function renderUserAccountsList() {
    const list = document.getElementById('account-list');
    if (!list) return;

    list.innerHTML = accountRecords.map((acc) => {
        return `<div class="account-row">
            <div>
                <b>${escapeHtml(acc.name)} (${escapeHtml(acc.role.toUpperCase())})</b>
                <small>${escapeHtml(acc.email)} · Password: <code>${escapeHtml(acc.password)}</code></small>
            </div>
            <span class="status ${acc.active ? 'active' : 'inactive'}">${acc.active ? 'Active' : 'Access Removed'}</span>
            <div class="account-row-actions">
                <button class="text-button" type="button" onclick="resetTempPassword('${acc.id}')">Reset Pass</button>
                ${acc.id !== 'account-admin-1' ? `<button class="text-button" type="button" onclick="toggleAccountLogin('${acc.id}')">${acc.active ? 'Deactivate' : 'Activate'}</button>` : ''}
            </div>
        </div>`;
    }).join('');
}

document.getElementById('account-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('account-email').value.trim().toLowerCase();
    if (accountRecords.some((a) => a.email.toLowerCase() === email)) {
        document.getElementById('account-message').textContent = 'An account with this email already exists.';
        document.getElementById('account-message').className = 'form-message error';
        return;
    }

    const role = document.getElementById('account-role').value;
    const name = document.getElementById('account-name').value.trim();
    const password = document.getElementById('account-password').value;
    const studentSelect = document.getElementById('account-student-select');

    const newAccount = {
        id: `account-${Date.now()}`,
        name,
        email,
        password,
        role,
        studentId: role === 'student' ? studentSelect.value : null,
        linkedStudentIds: role === 'parent' ? [studentSelect.value] : [],
        assignedClassIds: [],
        assignedSubjects: [],
        active: true
    };

    accountRecords.push(newAccount);
    saveStore('futureschoolAccounts', accountRecords);
    document.getElementById('account-message').textContent = 'User account created and ready for login.';
    document.getElementById('account-message').className = 'form-message';
    event.target.reset();
    renderUserAccountsList();
});

function resetTempPassword(accountId) {
    const acc = accountRecords.find((a) => a.id === accountId);
    if (!acc) return;
    const newPass = 'welcome' + Math.floor(100 + Math.random() * 900);
    acc.password = newPass;
    saveStore('futureschoolAccounts', accountRecords);
    renderUserAccountsList();
    alert(`Temporary password for ${acc.name} has been reset to: ${newPass}`);
}

function toggleAccountLogin(accountId) {
    const acc = accountRecords.find((a) => a.id === accountId);
    if (!acc || acc.id === 'account-admin-1') return;
    acc.active = !acc.active;
    saveStore('futureschoolAccounts', accountRecords);
    renderUserAccountsList();
}

// Admin: Class Management
function renderClassesList() {
    const list = document.getElementById('class-record-list');
    if (!list) return;

    list.innerHTML = classes.map((c) => {
        const studentCount = students.filter((s) => s.classId === c.id && s.status === 'Active').length;
        return `<div class="account-row">
            <div>
                <b>${escapeHtml(c.name)} · Section ${escapeHtml(c.section)}</b>
                <small>Class Teacher: ${escapeHtml(c.teacherName)} · Enrolled Students: ${studentCount}</small>
            </div>
            <span class="status ${c.active ? 'active' : 'inactive'}">${c.active ? 'Active' : 'Inactive'}</span>
        </div>`;
    }).join('');
}

document.getElementById('class-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('class-name').value.trim();
    const section = document.getElementById('class-section').value.trim().toUpperCase();
    const teacherSelect = document.getElementById('class-teacher');
    const teacher = teachers.find((t) => t.id === teacherSelect.value);

    if (classes.some((c) => c.name.toLowerCase() === name.toLowerCase() && c.section === section)) {
        document.getElementById('class-message').textContent = 'That class section already exists.';
        document.getElementById('class-message').className = 'form-message error';
        return;
    }

    const newClass = {
        id: `c-${name.toLowerCase().replace(/\s+/g, '')}-${section.toLowerCase()}`,
        name,
        section,
        teacherId: teacher ? teacher.id : null,
        teacherName: teacher ? teacher.name : 'Unassigned',
        active: true
    };

    classes.push(newClass);
    saveStore('classes', classes);
    document.getElementById('class-message').textContent = 'Class section created.';
    document.getElementById('class-message').className = 'form-message';
    event.target.reset();

    renderClassesList();
    populateClassDropdowns();
    renderAdminDashboard();
});

// Section 6: Attendance Implementation
function initTeacherAttendanceView() {
    const classSelect = document.getElementById('attendance-class-select');
    const dateInput = document.getElementById('attendance-date-input');
    if (!classSelect || !dateInput) return;

    const teacherClasses = getTeacherClasses();
    classSelect.innerHTML = teacherClasses.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}-${escapeHtml(c.section)}</option>`).join('');

    dateInput.value = todayISO;
    renderTeacherAttendanceRoster();
}

function renderTeacherAttendanceRoster() {
    const classSelect = document.getElementById('attendance-class-select');
    const dateInput = document.getElementById('attendance-date-input');
    const rosterTbody = document.getElementById('teacher-attendance-roster');
    if (!classSelect || !dateInput || !rosterTbody) return;

    const classId = classSelect.value;
    const date = dateInput.value;
    const classStudents = students.filter((s) => s.classId === classId && s.status === 'Active');

    if (!classStudents.length) {
        rosterTbody.innerHTML = '<tr><td colspan="3" class="muted">No active students enrolled in this section.</td></tr>';
        return;
    }

    rosterTbody.innerHTML = classStudents.map((s) => {
        const existing = attendanceRecords.find((r) => r.studentId === s.id && r.date === date);
        const currentStatus = existing ? existing.status : 'Present';

        return `<tr data-student-id="${s.id}">
            <td>${escapeHtml(s.roll)}</td>
            <td><b>${escapeHtml(s.name)}</b></td>
            <td>
                <select class="attendance-status">
                    <option value="Present" ${currentStatus === 'Present' ? 'selected' : ''}>Present</option>
                    <option value="Absent" ${currentStatus === 'Absent' ? 'selected' : ''}>Absent</option>
                    <option value="Late" ${currentStatus === 'Late' ? 'selected' : ''}>Late</option>
                </select>
            </td>
        </tr>`;
    }).join('');
}

// Section 6: Mark All Present behavior (ONLY updates .attendance-status dropdowns)
function markAllPresent() {
    const statusSelects = document.querySelectorAll('#teacher-attendance-roster .attendance-status');
    statusSelects.forEach((select) => {
        select.value = 'Present';
    });
}

document.getElementById('attendance-date-input')?.addEventListener('change', renderTeacherAttendanceRoster);

document.getElementById('teacher-attendance-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const classSelect = document.getElementById('attendance-class-select');
    const date = document.getElementById('attendance-date-input').value;
    const correctionReason = document.getElementById('attendance-correction-reason').value.trim();
    const rows = document.querySelectorAll('#teacher-attendance-roster tr[data-student-id]');

    rows.forEach((row) => {
        const studentId = row.dataset.studentId;
        const status = row.querySelector('.attendance-status').value;
        const student = students.find((s) => s.id === studentId);
        const recordId = `${studentId}_${date}`;

        const existingIndex = attendanceRecords.findIndex((r) => r.id === recordId || (r.studentId === studentId && r.date === date));
        const recordData = {
            id: recordId,
            studentId,
            classId: classSelect.value,
            date,
            status,
            teacher: currentAccount ? currentAccount.name : 'Teacher',
            reason: correctionReason
        };

        if (existingIndex >= 0) {
            attendanceRecords[existingIndex] = recordData;
        } else {
            attendanceRecords.push(recordData);
        }

        // Section 6: Trigger absence alert ONLY for the linked parent of the absent student
        if (status === 'Absent' && student) {
            const alreadyNotified = notificationRecords.some((n) => n.type === 'Attendance Alert' && n.studentId === studentId && n.createdAt.startsWith(date));
            if (!alreadyNotified) {
                notificationRecords.push({
                    id: `notif-${Date.now()}-${studentId}`,
                    type: 'Attendance Alert',
                    audience: 'Parents',
                    studentId,
                    classId: classSelect.value,
                    title: `Absence Alert: ${student.name}`,
                    message: `Your child ${student.name} was marked absent on ${date}. Reason: ${correctionReason || 'Not specified'}.`,
                    createdAt: new Date().toISOString(),
                    read: false
                });
            }
        }
    });

    saveStore('attendance', attendanceRecords);
    saveStore('notifications', notificationRecords);

    const msg = document.getElementById('attendance-message');
    msg.textContent = 'Attendance saved successfully.';
    msg.className = 'form-message';

    renderAdminDashboard();
    renderTeacherDashboard();
});

function renderAdminAttendanceReport() {
    const filterDateInput = document.getElementById('admin-attendance-filter-date');
    const container = document.getElementById('admin-attendance-report-container');
    if (!container) return;

    const date = filterDateInput?.value || todayISO;
    if (filterDateInput) filterDateInput.value = date;

    const dateRecords = attendanceRecords.filter((r) => r.date === date);

    const rows = classes.filter((c) => c.active).map((c) => {
        const classStudents = students.filter((s) => s.classId === c.id && s.status === 'Active');
        const classRecords = dateRecords.filter((r) => r.classId === c.id);
        const present = classRecords.filter((r) => r.status === 'Present').length;
        const late = classRecords.filter((r) => r.status === 'Late').length;
        const absent = classRecords.filter((r) => r.status === 'Absent').length;
        const submitted = classRecords.length > 0;
        const rate = classStudents.length ? Math.round(((present + late) / classStudents.length) * 100) : 0;

        return `<tr>
            <td><b>${escapeHtml(c.name)}-${escapeHtml(c.section)}</b></td>
            <td>${escapeHtml(c.teacherName)}</td>
            <td>${classStudents.length}</td>
            <td>${submitted ? `${present + late} / ${classStudents.length} (${rate}%)` : '—'}</td>
            <td>${submitted ? late : '—'}</td>
            <td>${submitted ? absent : '—'}</td>
            <td><span class="status ${submitted ? 'paid' : 'pending'}">${submitted ? 'Submitted' : 'Pending'}</span></td>
        </tr>`;
    }).join('');

    container.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Class Teacher</th>
                    <th>Enrolled</th>
                    <th>Attended Rate</th>
                    <th>Late Arrivals</th>
                    <th>Absences</th>
                    <th>Submission Status</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

function renderStudentAttendance() {
    const student = getCurrentStudent();
    if (!student) return;

    const records = attendanceRecords.filter((r) => r.studentId === student.id).sort((a, b) => b.date.localeCompare(a.date));
    const attended = records.filter((r) => r.status === 'Present' || r.status === 'Late').length;
    const lates = records.filter((r) => r.status === 'Late').length;
    const absents = records.filter((r) => r.status === 'Absent').length;
    const rate = records.length ? Math.round((attended / records.length) * 100) : 0;

    document.getElementById('student-att-rate').textContent = `${rate}%`;
    document.getElementById('student-att-days').textContent = `${attended} / ${records.length}`;
    document.getElementById('student-att-late').textContent = lates;
    document.getElementById('student-att-absent').textContent = absents;

    const tbody = document.querySelector('#student-attendance-table tbody');
    if (!tbody) return;

    tbody.innerHTML = records.map((r) => {
        const d = new Date(r.date + 'T00:00:00');
        return `<tr>
            <td>${escapeHtml(r.date)}</td>
            <td>${d.toLocaleDateString('en-GB', { weekday: 'long' })}</td>
            <td><span class="status ${r.status === 'Present' ? 'present' : r.status === 'Late' ? 'late' : 'absent'}">${escapeHtml(r.status)}</span></td>
            <td>${escapeHtml(r.teacher)}</td>
            <td>${escapeHtml(r.reason || '—')}</td>
        </tr>`;
    }).join('') || '<tr><td colspan="5" class="muted">No attendance history recorded yet.</td></tr>';
}

function renderParentAttendance() {
    const child = getSelectedParentChild();
    if (!child) return;

    const records = attendanceRecords.filter((r) => r.studentId === child.id).sort((a, b) => b.date.localeCompare(a.date));
    const attended = records.filter((r) => r.status === 'Present' || r.status === 'Late').length;
    const lates = records.filter((r) => r.status === 'Late').length;
    const rate = records.length ? Math.round((attended / records.length) * 100) : 0;

    document.getElementById('parent-att-rate').textContent = `${rate}%`;
    document.getElementById('parent-att-name').textContent = child.name;
    document.getElementById('parent-att-days').textContent = `${attended} / ${records.length}`;
    document.getElementById('parent-att-late').textContent = lates;

    const todayRec = records.find((r) => r.date === todayISO);
    document.getElementById('parent-att-today-text').textContent = todayRec ? todayRec.status : 'Not marked';

    const tbody = document.querySelector('#parent-attendance-table tbody');
    if (!tbody) return;

    tbody.innerHTML = records.map((r) => {
        const d = new Date(r.date + 'T00:00:00');
        return `<tr>
            <td>${escapeHtml(r.date)}</td>
            <td>${d.toLocaleDateString('en-GB', { weekday: 'long' })}</td>
            <td><span class="status ${r.status === 'Present' ? 'present' : r.status === 'Late' ? 'late' : 'absent'}">${escapeHtml(r.status)}</span></td>
            <td>${escapeHtml(r.teacher)}</td>
            <td>${escapeHtml(r.reason || '—')}</td>
        </tr>`;
    }).join('') || '<tr><td colspan="5" class="muted">No attendance logs available for this child.</td></tr>';
}

// Section 7: Homework Implementation
function renderTeacherHomeworkList() {
    const list = document.getElementById('teacher-homework-list');
    const filterSelect = document.getElementById('teacher-hw-class-filter');
    if (!list) return;

    const teacherClasses = getTeacherClasses();
    if (filterSelect) {
        filterSelect.innerHTML = '<option value="all">All Assigned Classes</option>' + teacherClasses.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}-${escapeHtml(c.section)}</option>`).join('');
    }

    const selectedClassId = filterSelect?.value || 'all';
    const homework = homeworkRecords.filter((h) => selectedClassId === 'all' || h.classId === selectedClassId);

    if (!homework.length) {
        list.innerHTML = '<p class="muted">No homework assignments found.</p>';
        return;
    }

    list.innerHTML = homework.map((hw) => {
        const submissions = hw.submissions || [];
        const subCount = `${submissions.length} submitted`;

        return `<div class="assignment-row">
            <b>${escapeHtml(hw.title)}</b>
            <span>${escapeHtml(hw.subject)} · Class: ${escapeHtml(hw.className)} · Due: ${escapeHtml(hw.dueDate)}</span>
            <div style="display:flex; gap:10px; align-items:center; margin:6px 0;">
                <span class="status ${hw.status === 'Published' ? 'published' : 'draft'}">${escapeHtml(hw.status)}</span>
                <em>${subCount}</em>
                <button class="text-button" type="button" onclick="editHomework('${hw.id}')">Edit</button>
                <button class="text-button" type="button" onclick="closeHomework('${hw.id}')">${hw.status === 'Closed' ? 'Reopen' : 'Close'}</button>
                <button class="text-button danger-button" type="button" onclick="deleteHomework('${hw.id}')">Delete</button>
            </div>
            ${submissions.map((sub) => `
                <div style="background:#f7faf8; padding:8px 12px; border-radius:6px; margin-top:6px;">
                    <small><b>${escapeHtml(sub.studentName)}:</b> ${escapeHtml(sub.response)} ${sub.attachmentName ? `(Attachment: <code>${escapeHtml(sub.attachmentName)}</code>)` : ''}</small>
                    <form class="feedback-form" onsubmit="saveTeacherFeedback(event, '${hw.id}', '${sub.studentId}')">
                        <input name="feedback" value="${escapeHtml(sub.feedback || '')}" placeholder="Add teacher review notes...">
                        <button class="primary-button small" type="submit">Save Feedback</button>
                    </form>
                </div>
            `).join('')}
        </div>`;
    }).join('');
}

document.getElementById('homework-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const editId = document.getElementById('homework-edit-id').value;
    const classId = document.getElementById('homework-class').value;
    const targetClass = classes.find((c) => c.id === classId);
    const subject = document.getElementById('homework-subject').value;
    const title = document.getElementById('homework-title').value.trim();
    const instructions = document.getElementById('homework-instructions').value.trim();
    const dueDate = document.getElementById('homework-date').value;
    const status = document.getElementById('homework-status-select').value;
    const attachment = document.getElementById('homework-attachment-name').value.trim();

    if (editId) {
        const hw = homeworkRecords.find((h) => h.id === editId);
        if (hw) {
            hw.classId = classId;
            hw.className = targetClass ? `${targetClass.name}-${targetClass.section}` : hw.className;
            hw.subject = subject;
            hw.title = title;
            hw.instructions = instructions;
            hw.dueDate = dueDate;
            hw.status = status;
            hw.attachment = attachment;
        }
    } else {
        homeworkRecords.unshift({
            id: `hw-${Date.now()}`,
            classId,
            className: targetClass ? `${targetClass.name}-${targetClass.section}` : 'Class',
            subject,
            title,
            instructions,
            dueDate,
            attachment,
            status,
            createdAt: todayISO,
            submissions: []
        });
    }

    saveStore('homework', homeworkRecords);
    document.getElementById('homework-message').textContent = 'Homework published successfully.';
    event.target.reset();
    document.getElementById('homework-edit-id').value = '';
    document.getElementById('homework-form-title').textContent = 'Assign new homework';
    renderTeacherHomeworkList();
    renderTeacherDashboard();
});

function editHomework(hwId) {
    const hw = homeworkRecords.find((h) => h.id === hwId);
    if (!hw) return;
    document.getElementById('homework-edit-id').value = hw.id;
    document.getElementById('homework-class').value = hw.classId;
    document.getElementById('homework-subject').value = hw.subject;
    document.getElementById('homework-title').value = hw.title;
    document.getElementById('homework-instructions').value = hw.instructions;
    document.getElementById('homework-date').value = hw.dueDate;
    document.getElementById('homework-status-select').value = hw.status;
    document.getElementById('homework-attachment-name').value = hw.attachment || '';
    document.getElementById('homework-form-title').textContent = `Edit: ${hw.title}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeHomework(hwId) {
    const hw = homeworkRecords.find((h) => h.id === hwId);
    if (!hw) return;
    hw.status = hw.status === 'Closed' ? 'Published' : 'Closed';
    saveStore('homework', homeworkRecords);
    renderTeacherHomeworkList();
}

function deleteHomework(hwId) {
    if (!window.confirm('Are you sure you want to delete this homework assignment and its student submissions?')) return;
    homeworkRecords = homeworkRecords.filter((h) => h.id !== hwId);
    saveStore('homework', homeworkRecords);
    renderTeacherHomeworkList();
    renderTeacherDashboard();
}

function saveTeacherFeedback(event, hwId, studentId) {
    event.preventDefault();
    const hw = homeworkRecords.find((h) => h.id === hwId);
    if (!hw) return;
    const sub = hw.submissions.find((s) => s.studentId === studentId);
    if (sub) {
        sub.feedback = event.target.feedback.value.trim();
        sub.status = 'Reviewed';
        saveStore('homework', homeworkRecords);
        alert('Feedback saved.');
        renderTeacherHomeworkList();
    }
}

function renderStudentHomework() {
    const student = getCurrentStudent();
    const list = document.getElementById('student-homework-list');
    if (!student || !list) return;

    document.getElementById('student-hw-class-badge').textContent = `${student.className}-${student.section}`;
    const studentClassHw = homeworkRecords.filter((h) => h.classId === student.classId && h.status === 'Published');

    if (!studentClassHw.length) {
        list.innerHTML = '<p class="muted">No homework assignments active for your class.</p>';
        return;
    }

    list.innerHTML = studentClassHw.map((hw) => {
        const sub = hw.submissions?.find((s) => s.studentId === student.id);
        const isPastDue = todayISO > hw.dueDate;

        return `<div class="assignment-row">
            <b>${escapeHtml(hw.title)}</b>
            <span>${escapeHtml(hw.subject)} · Due ${escapeHtml(hw.dueDate)}</span>
            <p class="muted" style="margin:4px 0;">${escapeHtml(hw.instructions || '')}</p>
            ${hw.attachment ? `<small>Attached Worksheet: <code>${escapeHtml(hw.attachment)}</code></small>` : ''}
            ${sub ? `
                <div style="background:#edf5f1; padding:10px; border-radius:6px; margin-top:8px;">
                    <p><b>Your Submission:</b> ${escapeHtml(sub.response)}</p>
                    ${sub.attachmentName ? `<small>Attachment: <code>${escapeHtml(sub.attachmentName)}</code></small><br>` : ''}
                    <small class="grade">Status: ${escapeHtml(sub.status)}</small>
                    ${sub.feedback ? `<p style="margin-top:4px;"><b>Teacher Feedback:</b> ${escapeHtml(sub.feedback)}</p>` : ''}
                    ${!isPastDue ? `<button class="text-button" type="button" style="margin-top:6px;" onclick="reEditStudentSubmission('${hw.id}')">Edit submission</button>` : ''}
                </div>
            ` : `
                <form class="homework-submit-form" onsubmit="submitStudentHomework(event, '${hw.id}')">
                    <input name="response" required placeholder="Type your answer or response...">
                    <input name="attachmentName" placeholder="Attachment placeholder (e.g. solution.pdf)">
                    <button class="primary-button small" type="submit">Submit Assignment</button>
                </form>
            `}
        </div>`;
    }).join('');
}

function submitStudentHomework(event, hwId) {
    event.preventDefault();
    const student = getCurrentStudent();
    const hw = homeworkRecords.find((h) => h.id === hwId);
    if (!student || !hw) return;

    const response = event.target.response.value.trim();
    const attachmentName = event.target.attachmentName.value.trim();

    if (!hw.submissions) hw.submissions = [];
    const existingIndex = hw.submissions.findIndex((s) => s.studentId === student.id);

    const subData = {
        studentId: student.id,
        studentName: student.name,
        response,
        attachmentName,
        submittedAt: new Date().toISOString(),
        status: todayISO > hw.dueDate ? 'Late' : 'Submitted',
        feedback: ''
    };

    if (existingIndex >= 0) {
        hw.submissions[existingIndex] = subData;
    } else {
        hw.submissions.push(subData);
    }

    saveStore('homework', homeworkRecords);
    renderStudentHomework();
    renderStudentDashboard();
}

function reEditStudentSubmission(hwId) {
    const student = getCurrentStudent();
    const hw = homeworkRecords.find((h) => h.id === hwId);
    if (!student || !hw) return;
    const sub = hw.submissions.find((s) => s.studentId === student.id);
    if (!sub) return;

    const newResponse = window.prompt('Update your assignment submission response:', sub.response);
    if (newResponse !== null) {
        sub.response = newResponse.trim();
        saveStore('homework', homeworkRecords);
        renderStudentHomework();
    }
}

// Section 7: Parent Homework View (searched using selected linked Student ID, NOT Parent account ID!)
function renderParentHomework() {
    const child = getSelectedParentChild();
    const list = document.getElementById('parent-homework-list');
    if (!child || !list) return;

    document.getElementById('parent-hw-child-title').textContent = `${child.name} · Assigned homework`;
    const childHw = homeworkRecords.filter((h) => h.classId === child.classId && h.status === 'Published');

    if (!childHw.length) {
        list.innerHTML = '<p class="muted">No homework assignments recorded for this child.</p>';
        return;
    }

    list.innerHTML = childHw.map((hw) => {
        // Bug Fix: Search submissions using child.id, not currentAccount.id!
        const sub = hw.submissions?.find((s) => s.studentId === child.id);

        return `<div class="assignment-row">
            <b>${escapeHtml(hw.title)}</b>
            <span>${escapeHtml(hw.subject)} · Due ${escapeHtml(hw.dueDate)}</span>
            <p class="muted">${escapeHtml(hw.instructions || '')}</p>
            ${sub ? `
                <div style="background:#edf5f1; padding:10px; border-radius:6px; margin-top:6px;">
                    <p><b>Child Response:</b> ${escapeHtml(sub.response)}</p>
                    <small class="grade">Status: ${escapeHtml(sub.status)}</small>
                    ${sub.feedback ? `<p style="margin-top:4px;"><b>Teacher Review:</b> ${escapeHtml(sub.feedback)}</p>` : ''}
                </div>
            ` : '<em style="color:var(--yellow);">Pending submission</em>'}
        </div>`;
    }).join('');
}

function renderAdminHomeworkList() {
    const list = document.getElementById('admin-homework-list');
    const filter = document.getElementById('admin-hw-class-filter');
    if (!list) return;

    if (filter) {
        filter.innerHTML = '<option value="all">All School Classes</option>' + classes.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}-${escapeHtml(c.section)}</option>`).join('');
    }

    const classId = filter?.value || 'all';
    const homework = homeworkRecords.filter((h) => classId === 'all' || h.classId === classId);

    if (!homework.length) {
        list.innerHTML = '<p class="muted">No homework published across classes.</p>';
        return;
    }

    list.innerHTML = homework.map((hw) => `
        <div class="assignment-row">
            <b>${escapeHtml(hw.title)} (${escapeHtml(hw.className)})</b>
            <span>${escapeHtml(hw.subject)} · Due ${escapeHtml(hw.dueDate)} · ${hw.submissions?.length || 0} Submissions</span>
        </div>
    `).join('');
}

// Section 8: Marks and Grades Implementation
function calculateGrade(percentage) {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    if (percentage >= 50) return 'D';
    return 'Needs Improvement';
}

function loadTeacherMarksRoster() {
    const classSelect = document.getElementById('marks-class-select');
    const subjectSelect = document.getElementById('marks-subject-select');
    const examSelect = document.getElementById('marks-exam-select');
    const maxInput = document.getElementById('marks-max-input');
    const tbody = document.getElementById('marks-roster-tbody');
    if (!classSelect || !tbody) return;

    const teacherClasses = getTeacherClasses();
    if (classSelect.options.length === 0) {
        classSelect.innerHTML = teacherClasses.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}-${escapeHtml(c.section)}</option>`).join('');
    }

    const classId = classSelect.value;
    const subject = subjectSelect.value;
    const exam = examSelect.value;
    const maxMarks = Number(maxInput.value || 100);

    const classStudents = students.filter((s) => s.classId === classId && s.status === 'Active');

    if (!classStudents.length) {
        tbody.innerHTML = '<tr><td colspan="5" class="muted">No active students found in this class section.</td></tr>';
        return;
    }

    tbody.innerHTML = classStudents.map((s) => {
        const existing = marksRecords.find((m) => m.studentId === s.id && m.classId === classId && m.subject === subject && m.exam === exam);
        const score = existing ? existing.score : '';
        const pct = existing ? existing.percentage : 0;
        const grade = existing ? existing.grade : '—';

        return `<tr data-student-id="${s.id}" data-student-name="${escapeHtml(s.name)}">
            <td>${escapeHtml(s.roll)}</td>
            <td><b>${escapeHtml(s.name)}</b></td>
            <td>
                <input class="mark-input" type="number" min="0" max="${maxMarks}" value="${score}" oninput="recalcRowGrade(this)">
            </td>
            <td class="row-pct">${existing ? `${pct}%` : '—'}</td>
            <td class="grade row-grade">${grade}</td>
        </tr>`;
    }).join('');
}

function recalcRowGrade(input) {
    const row = input.closest('tr');
    const maxMarks = Number(document.getElementById('marks-max-input').value || 100);
    const scoreVal = input.value.trim();

    if (scoreVal === '') {
        row.querySelector('.row-pct').textContent = '—';
        row.querySelector('.row-grade').textContent = '—';
        return;
    }

    const score = Number(scoreVal);
    const pct = Math.round((score / maxMarks) * 100);
    const grade = calculateGrade(pct);

    row.querySelector('.row-pct').textContent = `${pct}%`;
    row.querySelector('.row-grade').textContent = grade;
}

function recalculateAllGrades() {
    document.querySelectorAll('#marks-roster-tbody .mark-input').forEach((input) => recalcRowGrade(input));
}

// Section 8: Save marks without deleting other subjects, exams, classes or students (Composite key!)
function saveMarks(mode = 'Draft') {
    const classId = document.getElementById('marks-class-select').value;
    const subject = document.getElementById('marks-subject-select').value;
    const exam = document.getElementById('marks-exam-select').value;
    const maxMarks = Number(document.getElementById('marks-max-input').value || 100);
    const rows = document.querySelectorAll('#marks-roster-tbody tr[data-student-id]');

    let hasErrors = false;
    rows.forEach((row) => {
        const input = row.querySelector('.mark-input');
        const scoreVal = input.value.trim();
        if (scoreVal === '' || Number(scoreVal) < 0 || Number(scoreVal) > maxMarks) {
            hasErrors = true;
        }
    });

    if (hasErrors) {
        const msg = document.getElementById('marks-message');
        msg.textContent = `Please enter valid marks from 0 to ${maxMarks} for all students.`;
        msg.className = 'form-message error';
        return;
    }

    rows.forEach((row) => {
        const studentId = row.dataset.studentId;
        const studentName = row.dataset.studentName;
        const score = Number(row.querySelector('.mark-input').value);
        const percentage = Math.round((score / maxMarks) * 100);
        const grade = calculateGrade(percentage);

        // Composite key: studentId_classId_subject_exam
        const markId = `m_${studentId}_${classId}_${subject}_${exam}`;
        const existingIdx = marksRecords.findIndex((m) => m.id === markId || (m.studentId === studentId && m.classId === classId && m.subject === subject && m.exam === exam));

        const markData = {
            id: markId,
            studentId,
            studentName,
            classId,
            subject,
            exam,
            maximumMarks: maxMarks,
            score,
            percentage,
            grade,
            status: mode,
            savedAt: new Date().toISOString()
        };

        if (existingIdx >= 0) {
            marksRecords[existingIdx] = markData;
        } else {
            marksRecords.push(markData);
        }
    });

    saveStore('marks', marksRecords);

    const msg = document.getElementById('marks-message');
    msg.textContent = `Marks for ${subject} (${exam}) successfully saved as ${mode}.`;
    msg.className = 'form-message';

    renderAdminDashboard();
    renderTeacherDashboard();
}

function renderAdminMarksTable() {
    const classFilter = document.getElementById('admin-marks-class-filter');
    const examFilter = document.getElementById('admin-marks-exam-filter');
    const tbody = document.querySelector('#admin-marks-table tbody');
    if (!tbody) return;

    if (classFilter && classFilter.options.length === 0) {
        classFilter.innerHTML = '<option value="all">All Classes</option>' + classes.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}-${escapeHtml(c.section)}</option>`).join('');
    }

    const classId = classFilter?.value || 'all';
    const exam = examFilter?.value || 'all';

    const filtered = marksRecords.filter((m) => {
        if (classId !== 'all' && m.classId !== classId) return false;
        if (exam !== 'all' && m.exam !== exam) return false;
        return true;
    });

    if (!filtered.length) {
        tbody.innerHTML = '<tr><td colspan="8" class="muted">No assessment records found.</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map((m) => {
        const c = classes.find((cls) => cls.id === m.classId);
        return `<tr>
            <td><b>${escapeHtml(m.studentName)}</b></td>
            <td>${c ? `${escapeHtml(c.name)}-${escapeHtml(c.section)}` : escapeHtml(m.classId)}</td>
            <td>${escapeHtml(m.exam)}</td>
            <td>${escapeHtml(m.subject)}</td>
            <td>${m.score} / ${m.maximumMarks}</td>
            <td>${m.percentage}%</td>
            <td><strong class="grade">${escapeHtml(m.grade)}</strong></td>
            <td><span class="status ${m.status === 'Published' ? 'published' : 'draft'}">${escapeHtml(m.status)}</span></td>
        </tr>`;
    }).join('');
}

function renderStudentMarks() {
    const student = getCurrentStudent();
    const tbody = document.querySelector('#student-marks-table tbody');
    if (!student || !tbody) return;

    // Student can ONLY view Published marks
    const publishedMarks = marksRecords.filter((m) => m.studentId === student.id && m.status === 'Published');

    if (!publishedMarks.length) {
        tbody.innerHTML = '<tr><td colspan="6" class="muted">No published examination marks available.</td></tr>';
        return;
    }

    tbody.innerHTML = publishedMarks.map((m) => `
        <tr>
            <td>${escapeHtml(m.exam)}</td>
            <td><b>${escapeHtml(m.subject)}</b></td>
            <td>${m.score}</td>
            <td>${m.maximumMarks}</td>
            <td>${m.percentage}%</td>
            <td><strong class="grade">${escapeHtml(m.grade)}</strong></td>
        </tr>
    `).join('');
}

function renderParentMarks() {
    const child = getSelectedParentChild();
    const tbody = document.querySelector('#parent-marks-table tbody');
    if (!child || !tbody) return;

    document.getElementById('parent-marks-title').textContent = `${child.name} · Official marks`;

    // Parent can ONLY view Published marks
    const publishedMarks = marksRecords.filter((m) => m.studentId === child.id && m.status === 'Published');

    if (!publishedMarks.length) {
        tbody.innerHTML = '<tr><td colspan="6" class="muted">No published marks available for this child yet.</td></tr>';
        return;
    }

    tbody.innerHTML = publishedMarks.map((m) => `
        <tr>
            <td>${escapeHtml(m.exam)}</td>
            <td><b>${escapeHtml(m.subject)}</b></td>
            <td>${m.score}</td>
            <td>${m.maximumMarks}</td>
            <td>${m.percentage}%</td>
            <td><strong class="grade">${escapeHtml(m.grade)}</strong></td>
        </tr>
    `).join('');
}

// Section 9: Report Cards Implementation
function populateReportStudentSelect() {
    const select = document.getElementById('report-student');
    if (!select) return;

    let availableStudents = students;
    if (currentRole === 'teacher') {
        const teacherClasses = getTeacherClasses().map((c) => c.id);
        availableStudents = students.filter((s) => teacherClasses.includes(s.classId));
    }

    select.innerHTML = availableStudents.map((s) => `<option value="${s.id}">${escapeHtml(s.name)} (${escapeHtml(s.className)}-${escapeHtml(s.section)})</option>`).join('');
}

document.getElementById('report-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const studentId = document.getElementById('report-student').value;
    const comment = document.getElementById('report-teacher-comment').value.trim();
    const container = document.getElementById('report-preview');
    renderOfficialReportCard(container, studentId, comment);
});

function renderOfficialReportCard(container, studentId, teacherCommentOverride = '') {
    const student = students.find((s) => s.id === studentId) || students[0];
    if (!student || !container) return;

    const published = marksRecords.filter((m) => m.studentId === student.id && m.status === 'Published');
    const attRecords = attendanceRecords.filter((r) => r.studentId === student.id);
    const attended = attRecords.filter((r) => r.status === 'Present' || r.status === 'Late').length;
    const attRate = attRecords.length ? Math.round((attended / attRecords.length) * 100) : 100;

    const totalScore = published.reduce((sum, m) => sum + m.score, 0);
    const totalMax = published.reduce((sum, m) => sum + m.maximumMarks, 0);
    const overallPct = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0;
    const overallGrade = calculateGrade(overallPct);

    let resultStatus = 'Passed with Distinction';
    if (overallPct < 50) resultStatus = 'Needs Academic Support';
    else if (overallPct < 70) resultStatus = 'Passed';
    else if (overallPct < 85) resultStatus = 'Passed with Merit';

    const subjectRows = published.length ? published.map((m) => `
        <tr>
            <td><b>${escapeHtml(m.subject)}</b></td>
            <td>${m.score}</td>
            <td>${m.maximumMarks}</td>
            <td>${m.percentage}%</td>
            <td><strong class="grade">${escapeHtml(m.grade)}</strong></td>
        </tr>
    `).join('') : '<tr><td colspan="5" class="muted">No published examination marks available for this term.</td></tr>';

    const comment = teacherCommentOverride || (overallPct >= 80 ? 'Demonstrates excellent grasp of academic concepts and active classroom participation.' : 'Showing steady progress. Continued focus on revision will yield even better results.');

    container.innerHTML = `
        <div class="report-header">
            <div class="report-brand">
                <div class="brand-mark">${escapeHtml(schoolSettings.initials)}</div>
                <div>
                    <h2>${escapeHtml(schoolSettings.name)}</h2>
                    <small class="muted">${escapeHtml(schoolSettings.tagline)}</small>
                </div>
            </div>
            <div style="text-align:right;">
                <span class="status paid">Official Report Card</span><br>
                <small class="muted">Academic Year: 2026-2027 · Term 2</small>
            </div>
        </div>

        <div class="report-meta-grid">
            <p><b>Student Name:</b> ${escapeHtml(student.name)}</p>
            <p><b>Admission Number:</b> <code>${escapeHtml(student.admissionNumber)}</code></p>
            <p><b>Class & Section:</b> ${escapeHtml(student.className)}-${escapeHtml(student.section)}</p>
            <p><b>Roll Number:</b> ${escapeHtml(student.roll)}</p>
            <p><b>Attendance:</b> ${attRate}% (${attended} of ${attRecords.length} sessions attended)</p>
            <p><b>Overall Result:</b> <b style="color:var(--teal);">${resultStatus}</b></p>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Marks Obtained</th>
                    <th>Maximum Marks</th>
                    <th>Percentage</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>${subjectRows}</tbody>
        </table>

        <div class="report-summary-box">
            <div>
                <p><b>Cumulative Total:</b> ${totalScore} / ${totalMax} (${overallPct}%)</p>
                <p><b>Final Grade:</b> <span class="grade" style="font-size:1.1rem;">${overallGrade}</span></p>
                <p><b>Faculty Remarks:</b> <i>"${escapeHtml(comment)}"</i></p>
            </div>
            <div style="text-align:right;">
                <p><b>Principal:</b> ${escapeHtml(schoolSettings.principal)}</p>
                <small class="muted">Verified Academic Document</small>
            </div>
        </div>

        <div class="report-actions">
            <button class="primary-button small" type="button" onclick="window.print()">Print / Save as PDF</button>
            <button class="light-button small" type="button" onclick="goHome(event)">Back to Dashboard</button>
        </div>
    `;
}

// Section 10: Fees & Unified Payment Model
function renderAdminFeeLedger() {
    const tbody = document.getElementById('fees-table-tbody');
    const search = (document.getElementById('admin-fees-search')?.value || '').toLowerCase();
    if (!tbody) return;

    const filtered = feeInvoices.filter((inv) => inv.studentName.toLowerCase().includes(search) || inv.invoiceId.toLowerCase().includes(search));

    const totalBilled = feeInvoices.reduce((sum, inv) => sum + Number(inv.amount), 0);
    const totalCollected = paymentRecords.reduce((sum, p) => sum + Number(p.amount), 0);
    const totalPending = Math.max(0, totalBilled - totalCollected);
    const rate = totalBilled > 0 ? Math.round((totalCollected / totalBilled) * 100) : 0;

    document.getElementById('admin-fee-stat-total').textContent = `₹${totalBilled.toLocaleString('en-IN')}`;
    document.getElementById('admin-fee-stat-collected').textContent = `₹${totalCollected.toLocaleString('en-IN')}`;
    document.getElementById('admin-fee-stat-pending').textContent = `₹${totalPending.toLocaleString('en-IN')}`;
    document.getElementById('admin-fee-stat-rate').textContent = `${rate}%`;

    tbody.innerHTML = filtered.map((inv) => {
        const student = students.find((s) => s.id === inv.studentId);
        const isPaid = inv.status === 'Paid' || paymentRecords.some((p) => p.invoiceId === inv.invoiceId && p.studentId === inv.studentId);

        return `<tr>
            <td><b>${escapeHtml(inv.studentName)}</b></td>
            <td>${student ? `${escapeHtml(student.className)}-${escapeHtml(student.section)}` : 'Class'}</td>
            <td><code>${escapeHtml(inv.invoiceId)}</code></td>
            <td>${escapeHtml(inv.category)}</td>
            <td>₹${Number(inv.amount).toLocaleString('en-IN')}</td>
            <td>${escapeHtml(inv.dueDate)}</td>
            <td><span class="status ${isPaid ? 'paid' : 'pending'}">${isPaid ? 'Paid' : 'Pending'}</span></td>
            <td>
                ${isPaid ? `<button class="text-button" type="button" onclick="printReceiptForInvoice('${inv.invoiceId}')">Receipt</button>` : `<button class="primary-button small" type="button" onclick="recordCashPaymentAdmin('${inv.id}')">Record Cash</button>`}
            </td>
        </tr>`;
    }).join('') || '<tr><td colspan="8" class="muted">No fee invoices recorded.</td></tr>';
}

function toggleFeeAssignmentTarget(val) {
    document.getElementById('fee-target-class-container').classList.toggle('hidden', val !== 'class');
    document.getElementById('fee-target-student-container').classList.toggle('hidden', val !== 'student');
}

document.getElementById('fee-structure-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const category = document.getElementById('fee-category').value.trim();
    const amount = Number(document.getElementById('fee-amount').value);
    const dueDate = document.getElementById('fee-due-date').value;
    const assignmentType = document.getElementById('fee-assignment-type').value;

    let targetStudents = [];
    if (assignmentType === 'class') {
        // Section 10: Fix fee form field access using elements.namedItem
        const selectedClassId = form.elements.namedItem('className').value;
        targetStudents = students.filter((s) => s.classId === selectedClassId && s.status === 'Active');
    } else {
        const studentId = form.elements.namedItem('studentId').value;
        const student = students.find((s) => s.id === studentId);
        if (student) targetStudents = [student];
    }

    if (!targetStudents.length) {
        document.getElementById('fee-create-message').textContent = 'No matching active students to bill.';
        document.getElementById('fee-create-message').className = 'form-message error';
        return;
    }

    targetStudents.forEach((st) => {
        const invId = `INV-${Date.now().toString().slice(-6)}-${st.roll}`;
        feeInvoices.push({
            id: `inv-${Date.now()}-${st.id}`,
            invoiceId: invId,
            studentId: st.id,
            studentName: st.name,
            classId: st.classId,
            category,
            amount,
            dueDate,
            status: 'Pending'
        });
    });

    saveStore('feeInvoices', feeInvoices);
    document.getElementById('fee-create-message').textContent = `Invoices created for ${targetStudents.length} student(s).`;
    document.getElementById('fee-create-message').className = 'form-message';
    form.reset();
    renderAdminFeeLedger();
    renderAdminDashboard();
});

function recordCashPaymentAdmin(invInternalId) {
    const inv = feeInvoices.find((i) => i.id === invInternalId);
    if (!inv) return;

    // Prevent duplicate payment
    if (inv.status === 'Paid' || paymentRecords.some((p) => p.invoiceId === inv.invoiceId && p.studentId === inv.studentId)) {
        alert('This invoice has already been settled.');
        return;
    }

    const newPayment = {
        id: `pay-${Date.now()}`,
        invoiceId: inv.invoiceId,
        studentId: inv.studentId,
        parentAccountId: 'admin-cash-register',
        amount: inv.amount,
        paymentMethod: 'Cash (Office)',
        transactionReference: `CASH-${Date.now().toString().slice(-6)}`,
        paidAt: new Date().toISOString()
    };

    paymentRecords.push(newPayment);
    inv.status = 'Paid';

    saveStore('payments', paymentRecords);
    saveStore('feeInvoices', feeInvoices);

    renderAdminFeeLedger();
    renderAdminDashboard();
    printReceiptForInvoice(inv.invoiceId);
}

function renderParentFees() {
    const child = getSelectedParentChild();
    if (!child) return;

    document.getElementById('parent-fee-child').textContent = child.name;
    document.getElementById('parent-fee-class').textContent = `${child.className}-${child.section} · Roll No. ${child.roll}`;

    const invoices = getStudentInvoices(child.id);
    const pendingInvoices = invoices.filter((inv) => inv.status !== 'Paid' && !paymentRecords.some((p) => p.invoiceId === inv.invoiceId && p.studentId === child.id));
    const pendingTotal = pendingInvoices.reduce((sum, inv) => sum + Number(inv.amount), 0);

    document.getElementById('parent-fee-balance').textContent = `₹${pendingTotal.toLocaleString('en-IN')}`;
    const statusBadge = document.getElementById('parent-fee-status-badge');
    statusBadge.textContent = pendingTotal > 0 ? 'Outstanding balance' : 'All clear';
    statusBadge.className = `status ${pendingTotal > 0 ? 'pending' : 'paid'}`;

    const tbody = document.querySelector('#parent-fee-history tbody');
    if (tbody) {
        tbody.innerHTML = invoices.map((inv) => {
            const isPaid = inv.status === 'Paid' || paymentRecords.some((p) => p.invoiceId === inv.invoiceId && p.studentId === child.id);
            return `<tr>
                <td><code>${escapeHtml(inv.invoiceId)}</code></td>
                <td>${escapeHtml(inv.category)}</td>
                <td>₹${Number(inv.amount).toLocaleString('en-IN')}</td>
                <td>${escapeHtml(inv.dueDate)}</td>
                <td><span class="status ${isPaid ? 'paid' : 'pending'}">${isPaid ? 'Paid' : 'Pending'}</span></td>
            </tr>`;
        }).join('') || '<tr><td colspan="5" class="muted">No fee invoices issued for this student.</td></tr>';
    }

    const payInvoiceSelect = document.getElementById('parent-pay-invoice-select');
    const payBtn = document.getElementById('parent-pay-button');
    if (payInvoiceSelect) {
        payInvoiceSelect.innerHTML = pendingInvoices.map((inv) => `<option value="${inv.invoiceId}">${escapeHtml(inv.category)} - ₹${Number(inv.amount).toLocaleString('en-IN')} (Due: ${escapeHtml(inv.dueDate)})</option>`).join('');
        if (pendingInvoices.length === 0) {
            payInvoiceSelect.innerHTML = '<option value="">No pending invoices</option>';
            if (payBtn) payBtn.disabled = true;
        } else {
            if (payBtn) payBtn.disabled = false;
        }
    }
}

document.getElementById('parent-payment-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const child = getSelectedParentChild();
    const invoiceId = document.getElementById('parent-pay-invoice-select').value;
    const method = document.getElementById('payment-method').value;
    const ref = document.getElementById('payment-reference').value.trim() || `TXN-${Math.floor(100000 + Math.random() * 900000)}`;

    if (!invoiceId) return;

    // Prevent duplicate payment
    if (paymentRecords.some((p) => p.invoiceId === invoiceId && p.studentId === child.id)) {
        document.getElementById('parent-payment-message').textContent = 'This invoice has already been paid.';
        document.getElementById('parent-payment-message').className = 'form-message error';
        return;
    }

    const invoice = feeInvoices.find((inv) => inv.invoiceId === invoiceId && inv.studentId === child.id);
    if (!invoice) return;

    const payment = {
        id: `pay-${Date.now()}`,
        invoiceId,
        studentId: child.id,
        parentAccountId: currentAccount.id,
        amount: invoice.amount,
        paymentMethod: method,
        transactionReference: ref,
        paidAt: new Date().toISOString()
    };

    paymentRecords.push(payment);
    invoice.status = 'Paid';

    saveStore('payments', paymentRecords);
    saveStore('feeInvoices', feeInvoices);

    document.getElementById('parent-payment-message').innerHTML = 'Payment submitted successfully. Demo transaction recorded. <button class="text-button" type="button" onclick="printReceiptForInvoice(\'' + invoiceId + '\')">Print Receipt</button>';
    document.getElementById('parent-payment-message').className = 'form-message';

    renderParentFees();
    renderParentDashboard();
    renderParentPaymentsHistory();
});

function renderAdminPaymentsTable() {
    const tbody = document.querySelector('#admin-payments-table tbody');
    if (!tbody) return;

    if (!paymentRecords.length) {
        tbody.innerHTML = '<tr><td colspan="7" class="muted">No payment records found.</td></tr>';
        return;
    }

    tbody.innerHTML = paymentRecords.slice().reverse().map((p) => {
        const student = students.find((s) => s.id === p.studentId);
        return `<tr>
            <td>${new Date(p.paidAt).toLocaleString('en-GB')}</td>
            <td><b>${student ? escapeHtml(student.name) : 'Student'}</b></td>
            <td><code>${escapeHtml(p.invoiceId)}</code></td>
            <td>₹${Number(p.amount).toLocaleString('en-IN')}</td>
            <td>${escapeHtml(p.paymentMethod)}</td>
            <td><code>${escapeHtml(p.transactionReference)}</code></td>
            <td><button class="text-button" type="button" onclick="printReceiptForInvoice('${p.invoiceId}')">View Receipt</button></td>
        </tr>`;
    }).join('');
}

function renderAdminDefaultersTable() {
    const tbody = document.querySelector('#admin-defaulters-table tbody');
    if (!tbody) return;

    const overdue = feeInvoices.filter((inv) => inv.dueDate < todayISO && inv.status !== 'Paid' && !paymentRecords.some((p) => p.invoiceId === inv.invoiceId && p.studentId === inv.studentId));

    if (!overdue.length) {
        tbody.innerHTML = '<tr><td colspan="7" class="muted">No overdue fee defaulters at this time.</td></tr>';
        return;
    }

    tbody.innerHTML = overdue.map((inv) => {
        const student = students.find((s) => s.id === inv.studentId);
        return `<tr>
            <td><b>${escapeHtml(inv.studentName)}</b></td>
            <td>${student ? `${escapeHtml(student.className)}-${escapeHtml(student.section)}` : 'Class'}</td>
            <td><code>${escapeHtml(inv.invoiceId)}</code></td>
            <td style="color:var(--red);"><b>${escapeHtml(inv.dueDate)}</b></td>
            <td><strong>₹${Number(inv.amount).toLocaleString('en-IN')}</strong></td>
            <td>${student ? `${escapeHtml(student.parentName)} (${escapeHtml(student.parentMobile)})` : '—'}</td>
            <td><button class="primary-button small" type="button" onclick="sendIndividualReminder('${inv.studentId}')">Send Notice</button></td>
        </tr>`;
    }).join('');
}

function sendDefaulterReminders() {
    const overdue = feeInvoices.filter((inv) => inv.dueDate < todayISO && inv.status !== 'Paid' && !paymentRecords.some((p) => p.invoiceId === inv.invoiceId && p.studentId === inv.studentId));
    overdue.forEach((inv) => {
        notificationRecords.push({
            id: `notif-defaulter-${Date.now()}-${inv.studentId}`,
            type: 'Fee Reminder',
            audience: 'Parents',
            studentId: inv.studentId,
            classId: inv.classId,
            title: 'Outstanding Fee Reminder',
            message: `Friendly reminder: Fee invoice ${inv.invoiceId} of ₹${inv.amount} is overdue. Please settle at your earliest convenience.`,
            createdAt: new Date().toISOString(),
            read: false
        });
    });
    saveStore('notifications', notificationRecords);
    const msg = document.getElementById('defaulter-bulk-message');
    msg.textContent = `Fee reminder notifications sent to ${overdue.length} family accounts.`;
    msg.className = 'form-message';
}

function sendIndividualReminder(studentId) {
    const student = students.find((s) => s.id === studentId);
    if (!student) return;
    notificationRecords.push({
        id: `notif-def-${Date.now()}`,
        type: 'Fee Reminder',
        audience: 'Parents',
        studentId,
        classId: student.classId,
        title: 'Fee Payment Reminder',
        message: `Dear parent, please note that term fees for ${student.name} are pending. Kindly complete payment through the portal.`,
        createdAt: new Date().toISOString(),
        read: false
    });
    saveStore('notifications', notificationRecords);
    alert(`Notice sent to parent of ${student.name}.`);
}

function renderParentPaymentsHistory() {
    const child = getSelectedParentChild();
    const tbody = document.querySelector('#parent-payments-history-table tbody');
    if (!child || !tbody) return;

    document.getElementById('parent-payment-history-title').textContent = `${child.name} · Paid Receipts`;
    const childPayments = paymentRecords.filter((p) => p.studentId === child.id).reverse();

    if (!childPayments.length) {
        tbody.innerHTML = '<tr><td colspan="6" class="muted">No payment transactions recorded for this child.</td></tr>';
        return;
    }

    tbody.innerHTML = childPayments.map((p) => `
        <tr>
            <td><code>${escapeHtml(p.invoiceId)}</code></td>
            <td>${new Date(p.paidAt).toLocaleDateString('en-GB')}</td>
            <td>₹${Number(p.amount).toLocaleString('en-IN')}</td>
            <td>${escapeHtml(p.paymentMethod)}</td>
            <td><code>${escapeHtml(p.transactionReference)}</code></td>
            <td><button class="text-button" type="button" onclick="printReceiptForInvoice('${p.invoiceId}')">Print Receipt</button></td>
        </tr>
    `).join('');
}

function printReceiptForInvoice(invoiceId) {
    const payment = paymentRecords.find((p) => p.invoiceId === invoiceId);
    const invoice = feeInvoices.find((i) => i.invoiceId === invoiceId);
    const student = students.find((s) => s.id === (payment ? payment.studentId : invoice?.studentId));

    const receiptHtml = `
        <div style="font-family:sans-serif; padding:30px; max-width:650px; margin:0 auto; border:2px solid #087f73; border-radius:10px;">
            <div style="display:flex; justify-content:space-between; border-bottom:2px solid #e4e9e8; padding-bottom:15px;">
                <div>
                    <h2 style="color:#087f73; margin:0;">${escapeHtml(schoolSettings.name)}</h2>
                    <p style="margin:4px 0; color:#71808c;">Official Fee Payment Receipt</p>
                </div>
                <div style="text-align:right;">
                    <b>Receipt Date:</b> ${payment ? new Date(payment.paidAt).toLocaleDateString('en-GB') : new Date().toLocaleDateString('en-GB')}<br>
                    <b>Reference:</b> <code>${payment ? escapeHtml(payment.transactionReference) : 'OFFICE-CASH'}</code>
                </div>
            </div>
            <div style="margin:20px 0; font-size:14px; line-height:1.7;">
                <p><b>Student Name:</b> ${student ? escapeHtml(student.name) : 'Student'}<br>
                <b>Admission No:</b> ${student ? escapeHtml(student.admissionNumber) : '—'}<br>
                <b>Class & Section:</b> ${student ? `${escapeHtml(student.className)}-${escapeHtml(student.section)}` : 'Class'}<br>
                <b>Invoice ID:</b> <code>${escapeHtml(invoiceId)}</code><br>
                <b>Category:</b> ${invoice ? escapeHtml(invoice.category) : 'School Tuition'}<br>
                <b>Payment Method:</b> ${payment ? escapeHtml(payment.paymentMethod) : 'Cash (Office)'}</p>
            </div>
            <table style="width:100%; border-collapse:collapse; margin:20px 0;">
                <tr style="background:#f5f7f5;"><th style="padding:10px; text-align:left; border:1px solid #e4e9e8;">Description</th><th style="padding:10px; text-align:right; border:1px solid #e4e9e8;">Amount Paid</th></tr>
                <tr><td style="padding:10px; border:1px solid #e4e9e8;">${invoice ? escapeHtml(invoice.category) : 'Tuition Fee'}</td><td style="padding:10px; text-align:right; border:1px solid #e4e9e8;"><b>₹${payment ? Number(payment.amount).toLocaleString('en-IN') : '12,500'}</b></td></tr>
            </table>
            <div style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid #e4e9e8;">
                <small style="color:#71808c;">Computer-generated receipt · Valid without physical signature</small>
                <b>Accounts Seal: ${escapeHtml(schoolSettings.initials)}</b>
            </div>
        </div>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
        printWindow.document.write(`<html><head><title>Receipt - ${invoiceId}</title></head><body onload="window.print()">${receiptHtml}</body></html>`);
        printWindow.document.close();
    }
}

// Section 11: Notifications Implementation
function populateNotificationAudienceSelectors() {
    const typeSelect = document.getElementById('notification-type');
    const classSelect = document.getElementById('notification-class-select');
    const studentSelect = document.getElementById('notification-student-select');
    if (!typeSelect) return;

    if (currentRole === 'admin') {
        typeSelect.innerHTML = `
            <option value="General Notice">General Notice</option>
            <option value="Holiday Notice">Holiday Notice</option>
            <option value="Exam Notice">Exam Notice</option>
            <option value="Fee Reminder">Fee Reminder</option>
            <option value="Emergency Notice">Emergency Notice</option>
        `;
    } else if (currentRole === 'teacher') {
        typeSelect.innerHTML = `
            <option value="Class Notice">Class Notice</option>
            <option value="Homework Reminder">Homework Reminder</option>
            <option value="Attendance Alert">Attendance Alert</option>
            <option value="Parent Message">Parent Message</option>
        `;
    }

    if (classSelect) {
        classSelect.innerHTML = classes.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}-${escapeHtml(c.section)}</option>`).join('');
    }
    if (studentSelect) {
        studentSelect.innerHTML = students.map((s) => `<option value="${s.id}">${escapeHtml(s.name)} (${escapeHtml(s.className)}-${escapeHtml(s.section)})</option>`).join('');
    }
}

function toggleNotificationAudience(audience) {
    document.getElementById('notification-class-target')?.classList.toggle('hidden', audience !== 'Class');
    document.getElementById('notification-student-target')?.classList.toggle('hidden', audience !== 'Student');
}

document.getElementById('notification-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const type = document.getElementById('notification-type').value;
    const audience = document.getElementById('notification-audience').value;
    const title = document.getElementById('notification-title-input').value.trim();
    const message = document.getElementById('notification-message').value.trim();

    let studentId = null;
    let classId = null;
    if (audience === 'Class') {
        classId = document.getElementById('notification-class-select').value;
    } else if (audience === 'Student') {
        studentId = document.getElementById('notification-student-select').value;
    }

    notificationRecords.push({
        id: `notif-${Date.now()}`,
        type,
        audience,
        studentId,
        classId,
        title,
        message,
        createdAt: new Date().toISOString(),
        read: false
    });

    saveStore('notifications', notificationRecords);
    document.getElementById('notification-status').textContent = 'Demo notification broadcast saved.';
    event.target.reset();

    renderNotificationsList();
    renderAdminDashboard();
});

function renderNotificationsList() {
    const list = document.getElementById('notifications-history-list');
    if (!list) return;

    let relevant = notificationRecords;
    if (currentRole === 'parent') {
        const child = getSelectedParentChild();
        relevant = getStudentNotifications(child?.id, child?.classId);
    } else if (currentRole === 'student') {
        const student = getCurrentStudent();
        relevant = getStudentNotifications(student?.id, student?.classId);
    }

    if (!relevant.length) {
        list.innerHTML = '<p class="muted">No broadcast notifications found.</p>';
        return;
    }

    list.innerHTML = relevant.slice().reverse().map((n) => `
        <div class="notification-row">
            <span class="whatsapp-icon">WA</span>
            <div>
                <b>${escapeHtml(n.title)} <small class="role-tag" style="font-size:0.65rem; margin-left:6px;">${escapeHtml(n.type)}</small></b>
                <p style="font-size:0.82rem; margin:3px 0;">${escapeHtml(n.message)}</p>
                <small>${new Date(n.createdAt).toLocaleString('en-GB')} · Target: ${escapeHtml(n.audience)}</small>
            </div>
            <button class="text-button danger-button" type="button" onclick="deleteNotification('${n.id}')">Dismiss</button>
        </div>
    `).join('');
}

function deleteNotification(notifId) {
    notificationRecords = notificationRecords.filter((n) => n.id !== notifId);
    saveStore('notifications', notificationRecords);
    renderNotificationsList();
}

// Section 13: Quizzes Implementation (Multi-Question Support)
function renderTeacherQuizzes() {
    const list = document.getElementById('teacher-quiz-list');
    if (!list) return;

    const teacher = currentAccount;
    const quizzes = publishedQuizzes;

    if (!quizzes.length) {
        list.innerHTML = '<p class="muted">No quizzes created yet.</p>';
        return;
    }

    list.innerHTML = quizzes.map((q) => {
        const attempts = quizAttempts.filter((a) => a.quizId === q.id);
        const targetClass = classes.find((c) => c.id === q.targetClass);

        return `<div class="published-quiz">
            <div class="panel-heading" style="margin:0 0 6px;">
                <b>${escapeHtml(q.title)}</b>
                <span class="status ${q.status === 'Published' ? 'published' : 'draft'}">${escapeHtml(q.status)}</span>
            </div>
            <span>${escapeHtml(q.subject)} · Target: ${targetClass ? `${targetClass.name}-${targetClass.section}` : q.targetClass} · Due: ${escapeHtml(q.dueDate)}</span>
            <p>${q.questions?.length || 1} Question(s) · Total Marks: ${q.questions?.reduce((sum, item) => sum + Number(item.marks), 0) || 2}</p>
            <small>Student Attempts Recorded: ${attempts.length}</small>
            <div style="display:flex; gap:10px; margin-top:10px;">
                <button class="text-button" type="button" onclick="toggleQuizPublish('${q.id}')">${q.status === 'Published' ? 'Unpublish' : 'Publish'}</button>
                <button class="text-button" type="button" onclick="viewQuizAttempts('${q.id}')">View Attempts (${attempts.length})</button>
                <button class="text-button danger-button" type="button" onclick="deleteQuiz('${q.id}')">Delete</button>
            </div>
        </div>`;
    }).join('');
}

document.getElementById('teacher-quiz-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('teacher-quiz-title').value.trim();
    const subject = document.getElementById('teacher-quiz-subject').value;
    const targetClass = document.getElementById('teacher-quiz-class').value;
    const dueDate = document.getElementById('teacher-quiz-due').value;
    const status = document.getElementById('teacher-quiz-status').value;
    const retryAllowed = document.getElementById('teacher-quiz-retry').checked;

    const questionText = document.getElementById('teacher-quiz-question').value.trim();
    const options = document.getElementById('teacher-quiz-options').value.split(',').map((o) => o.trim()).filter(Boolean);
    const correct = document.getElementById('teacher-quiz-correct').value.trim();
    const explanation = document.getElementById('teacher-quiz-explanation').value.trim();
    const marks = Number(document.getElementById('teacher-quiz-marks').value || 2);

    if (options.length < 2) {
        document.getElementById('teacher-quiz-message').textContent = 'Provide at least two answer options separated by commas.';
        document.getElementById('teacher-quiz-message').className = 'form-message error';
        return;
    }

    if (!options.includes(correct)) {
        document.getElementById('teacher-quiz-message').textContent = 'The correct answer must exactly match one of the four options.';
        document.getElementById('teacher-quiz-message').className = 'form-message error';
        return;
    }

    const newQuiz = {
        id: `quiz-${Date.now()}`,
        title,
        subject,
        targetClass,
        dueDate,
        retryAllowed,
        status,
        teacherId: currentAccount?.id,
        teacherName: currentAccount?.name,
        questions: [
            {
                id: 'q1',
                question: questionText,
                options,
                answer: correct,
                explanation,
                marks
            }
        ]
    };

    publishedQuizzes.unshift(newQuiz);
    saveStore('futureschoolQuizzes', publishedQuizzes);

    document.getElementById('teacher-quiz-message').textContent = 'Quiz saved successfully.';
    document.getElementById('teacher-quiz-message').className = 'form-message';
    event.target.reset();
    renderTeacherQuizzes();
});

function toggleQuizPublish(quizId) {
    const q = publishedQuizzes.find((item) => item.id === quizId);
    if (!q) return;
    q.status = q.status === 'Published' ? 'Draft' : 'Published';
    saveStore('futureschoolQuizzes', publishedQuizzes);
    renderTeacherQuizzes();
}

function deleteQuiz(quizId) {
    if (!window.confirm('Are you sure you want to delete this quiz?')) return;
    publishedQuizzes = publishedQuizzes.filter((q) => q.id !== quizId);
    saveStore('futureschoolQuizzes', publishedQuizzes);
    renderTeacherQuizzes();
}

function viewQuizAttempts(quizId) {
    const attempts = quizAttempts.filter((a) => a.quizId === quizId);
    if (!attempts.length) {
        alert('No attempts submitted for this quiz yet.');
        return;
    }
    const report = attempts.map((a) => `${a.studentName}: ${a.score}/${a.maxScore} (${a.percentage}%) on ${new Date(a.submittedAt).toLocaleDateString('en-GB')}`).join('\n');
    alert(`Student Attempts:\n\n${report}`);
}

function renderStudentQuizzes() {
    const list = document.getElementById('published-quiz-list');
    const student = getCurrentStudent();
    if (!list || !student) return;

    const classQuizzes = publishedQuizzes.filter((q) => q.targetClass === student.classId && q.status === 'Published');

    if (!classQuizzes.length) {
        list.innerHTML = '<p class="muted">No class quizzes currently scheduled.</p>';
        return;
    }

    list.innerHTML = classQuizzes.map((q) => {
        const attempt = quizAttempts.find((a) => a.quizId === q.id && a.studentId === student.id);
        const maxScore = q.questions?.reduce((sum, item) => sum + Number(item.marks), 0) || 2;

        return `<div class="published-quiz">
            <div class="panel-heading" style="margin-bottom:4px;">
                <b>${escapeHtml(q.title)}</b>
                <span class="status info">${escapeHtml(q.subject)}</span>
            </div>
            <span>Assigned by ${escapeHtml(q.teacherName)} · Due ${escapeHtml(q.dueDate)}</span>
            ${attempt ? `
                <div style="margin-top:10px; background:#e3f3ec; padding:10px; border-radius:6px;">
                    <strong>Your Score: ${attempt.score} / ${maxScore} (${attempt.percentage}%)</strong><br>
                    <small class="muted">Submitted on ${new Date(attempt.submittedAt).toLocaleString('en-GB')}</small>
                    ${q.retryAllowed ? `<br><button class="text-button" type="button" style="margin-top:6px;" onclick="startInteractiveQuiz('${q.id}')">Retry Quiz</button>` : ''}
                </div>
            ` : `
                <div style="margin-top:10px;">
                    <button class="primary-button small" type="button" onclick="startInteractiveQuiz('${q.id}')">Start Quiz (${q.questions?.length || 1} Questions)</button>
                </div>
            `}
        </div>`;
    }).join('');
}

// Interactive Practice Runner
const practiceData = {
    math: [
        { question: 'What is 12 x 8?', options: ['86', '96', '108', '112'], answer: '96', explanation: '12 multiplied by 8 equals 96.' },
        { question: 'What is the value of x in 2x + 6 = 14?', options: ['2', '3', '4', '5'], answer: '4', explanation: '2x = 8, so x = 4.' },
        { question: 'Which number is a prime number?', options: ['21', '27', '31', '39'], answer: '31', explanation: '31 has no factors other than 1 and itself.' }
    ],
    science: [
        { question: 'Which gas do plants release during photosynthesis?', options: ['Oxygen', 'Nitrogen', 'Helium', 'Hydrogen'], answer: 'Oxygen', explanation: 'Plants release oxygen after using sunlight to make food.' },
        { question: 'What force pulls objects toward Earth?', options: ['Friction', 'Gravity', 'Magnetism', 'Pressure'], answer: 'Gravity', explanation: 'Gravity attracts objects toward the centre of Earth.' },
        { question: 'What is the boiling point of water at sea level?', options: ['50 C', '80 C', '100 C', '120 C'], answer: '100 C', explanation: 'Water boils at 100 C at standard sea-level pressure.' }
    ],
    english: [
        { question: 'Which word is an adjective?', options: ['Quickly', 'Beautiful', 'Run', 'Happiness'], answer: 'Beautiful', explanation: 'Beautiful describes a noun, so it is an adjective.' },
        { question: 'Choose the correct sentence.', options: ['She go to school.', 'She goes to school.', 'She going school.', 'She gone school.'], answer: 'She goes to school.', explanation: 'A singular subject takes goes in the present tense.' },
        { question: 'What is the opposite of ancient?', options: ['Old', 'Historic', 'Modern', 'Early'], answer: 'Modern', explanation: 'Modern means belonging to the present or recent times.' }
    ]
};

let currentQuizTopic = 'math';
let currentQuestionIndex = 0;
let interactiveScore = 0;
let currentSelectedOption = '';
let activeQuizQuestions = practiceData.math;
let currentCustomQuizId = null;

function renderInteractiveQuestion() {
    const q = activeQuizQuestions[currentQuestionIndex];
    if (!q) return;

    currentSelectedOption = '';
    document.getElementById('question-number').textContent = String(currentQuestionIndex + 1).padStart(2, '0');
    document.getElementById('question-subject').textContent = currentQuizTopic.toUpperCase();
    document.getElementById('question-text').textContent = q.question;
    document.getElementById('quiz-progress').textContent = `Question ${currentQuestionIndex + 1} of ${activeQuizQuestions.length}`;
    document.getElementById('quiz-feedback').textContent = '';

    const nextBtn = document.getElementById('next-question');
    nextBtn.textContent = 'Check answer';
    nextBtn.disabled = true;

    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = q.options.map((opt) => `<button class="answer-option" type="button" data-val="${escapeHtml(opt)}">${escapeHtml(opt)}</button>`).join('');

    optionsContainer.querySelectorAll('.answer-option').forEach((btn) => {
        btn.addEventListener('click', () => {
            optionsContainer.querySelectorAll('.answer-option').forEach((b) => b.classList.remove('selected'));
            btn.classList.add('selected');
            currentSelectedOption = btn.dataset.val;
            nextBtn.disabled = false;
        });
    });
}

document.getElementById('quiz-subject')?.addEventListener('change', (event) => {
    currentQuizTopic = event.target.value;
    activeQuizQuestions = practiceData[currentQuizTopic] || practiceData.math;
    currentCustomQuizId = null;
    currentQuestionIndex = 0;
    interactiveScore = 0;
    document.getElementById('quiz-score').textContent = '0';
    renderInteractiveQuestion();
});

document.getElementById('next-question')?.addEventListener('click', () => {
    const btn = document.getElementById('next-question');
    const q = activeQuizQuestions[currentQuestionIndex];
    const feedback = document.getElementById('quiz-feedback');

    if (btn.textContent === 'Try again') {
        currentQuestionIndex = 0;
        interactiveScore = 0;
        document.getElementById('quiz-score').textContent = '0';
        renderInteractiveQuestion();
        return;
    }

    if (btn.textContent === 'Next question' || btn.textContent === 'See results') {
        if (btn.textContent === 'See results') {
            feedback.textContent = `Quiz complete! You scored ${interactiveScore} out of ${activeQuizQuestions.length}.`;
            btn.textContent = 'Try again';

            if (currentCustomQuizId) {
                const student = getCurrentStudent();
                quizAttempts.push({
                    id: `attempt-${Date.now()}`,
                    quizId: currentCustomQuizId,
                    studentId: student.id,
                    studentName: student.name,
                    score: interactiveScore * 2,
                    maxScore: activeQuizQuestions.length * 2,
                    percentage: Math.round((interactiveScore / activeQuizQuestions.length) * 100),
                    submittedAt: new Date().toISOString()
                });
                saveStore('futureschoolQuizAttempts', quizAttempts);
                renderStudentQuizzes();
            }
            return;
        }
        currentQuestionIndex += 1;
        renderInteractiveQuestion();
        return;
    }

    // Check answer phase
    document.querySelectorAll('#answer-options .answer-option').forEach((optBtn) => {
        optBtn.disabled = true;
        if (optBtn.dataset.val === q.answer) optBtn.classList.add('correct');
        if (optBtn.dataset.val === currentSelectedOption && currentSelectedOption !== q.answer) optBtn.classList.add('incorrect');
    });

    if (currentSelectedOption === q.answer) {
        interactiveScore += 1;
        document.getElementById('quiz-score').textContent = interactiveScore;
        feedback.textContent = `Correct! ${q.explanation}`;
        feedback.style.color = 'var(--green)';
    } else {
        feedback.textContent = `Not quite. ${q.explanation}`;
        feedback.style.color = 'var(--red)';
    }

    btn.textContent = currentQuestionIndex === activeQuizQuestions.length - 1 ? 'See results' : 'Next question';
});

function startInteractiveQuiz(quizId) {
    const q = publishedQuizzes.find((item) => item.id === quizId);
    if (!q || !q.questions || !q.questions.length) return;

    currentCustomQuizId = q.id;
    currentQuizTopic = q.subject;
    activeQuizQuestions = q.questions;
    currentQuestionIndex = 0;
    interactiveScore = 0;
    document.getElementById('quiz-score').textContent = '0';
    renderInteractiveQuestion();
    document.getElementById('question-text').scrollIntoView({ behavior: 'smooth' });
}

// Section 14: AI Tutor (Personalized, Subject Select, Chat Persistence, Escaped HTML)
const tutorSuggestions = {
    math: ['Explain quadratic formula', 'How to solve simultaneous equations', 'Tips for trigonometry'],
    science: ['Explain photosynthesis', 'How do concave mirrors work?', 'What is Newton\'s third law?'],
    english: ['Difference between active and passive voice', 'How to write a formal essay', 'Grammar tips for tenses'],
    cs: ['What is an object in Java?', 'How does a for-loop work?', 'Explain compiler vs interpreter']
};

function initStudentTutor() {
    const student = getCurrentStudent();
    if (!student) return;

    document.getElementById('tutor-greeting-title').textContent = `${student.name}'s Tutor`;
    onTutorSubjectChange(document.getElementById('tutor-subject').value);

    // Chat persistence per student in localStorage
    const savedChat = localStorage.getItem(`futureschoolChatHistory_${student.id}`);
    const historyContainer = document.getElementById('chat-history');
    if (savedChat) {
        historyContainer.innerHTML = savedChat;
    } else {
        historyContainer.innerHTML = `<div class="chat-bubble tutor"><b>AI Tutor</b><p>Hi ${escapeHtml(student.name)}. What would you like to understand today?</p></div>`;
    }
}

function onTutorSubjectChange(sub) {
    const chipsContainer = document.getElementById('tutor-prompt-chips');
    if (!chipsContainer) return;
    const prompts = tutorSuggestions[sub] || tutorSuggestions.math;
    chipsContainer.innerHTML = prompts.map((p) => `<button type="button" onclick="useTutorPrompt('${escapeHtml(p)}')">${escapeHtml(p)}</button>`).join('');
}

function useTutorPrompt(promptText) {
    const input = document.getElementById('question');
    if (input) {
        input.value = promptText;
        input.focus();
    }
}

document.getElementById('tutor-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('question');
    const question = input.value.trim();
    if (!question) return;

    const student = getCurrentStudent();
    const lower = question.toLowerCase();
    let reply = 'That is a thoughtful question. Break it into smaller ideas, review the fundamental definitions, and try an illustrative example.';

    if (lower.includes('photo')) {
        reply = 'Photosynthesis is the biological process by which green plants utilize sunlight, water, and carbon dioxide to create glucose and release oxygen into the atmosphere.';
    } else if (lower.includes('quad') || lower.includes('math') || lower.includes('equation')) {
        reply = 'For quadratic equations of the form ax² + bx + c = 0, you can find the roots using the quadratic formula: x = (-b ± √(b² - 4ac)) / (2a). Always check the discriminant (b² - 4ac) first!';
    } else if (lower.includes('java') || lower.includes('loop') || lower.includes('object')) {
        reply = 'In Java, an Object is an instance of a Class that has state and behavior. Code runs on the Java Virtual Machine (JVM), ensuring cross-platform portability.';
    } else if (lower.includes('newton') || lower.includes('force') || lower.includes('mirror')) {
        reply = 'Newton\'s Third Law states: "For every action, there is an equal and opposite reaction." For spherical mirrors, remember that the focal length f = R/2.';
    }

    const chatHistory = document.getElementById('chat-history');
    chatHistory.insertAdjacentHTML('beforeend', `
        <div class="chat-bubble user"><b>You</b><p>${escapeHtml(question)}</p></div>
        <div class="chat-bubble tutor"><b>AI Tutor</b><p>${escapeHtml(reply)}</p></div>
    `);

    input.value = '';
    chatHistory.scrollTop = chatHistory.scrollHeight;

    if (student) {
        localStorage.setItem(`futureschoolChatHistory_${student.id}`, chatHistory.innerHTML);
    }
});

function clearTutorChat() {
    const student = getCurrentStudent();
    const historyContainer = document.getElementById('chat-history');
    historyContainer.innerHTML = `<div class="chat-bubble tutor"><b>AI Tutor</b><p>Hi ${student ? escapeHtml(student.name) : 'Student'}. What would you like to explore?</p></div>`;
    if (student) {
        localStorage.removeItem(`futureschoolChatHistory_${student.id}`);
    }
}

// Section 15: Teacher AI Tools (Lesson Planner & Question Paper Generator)
document.getElementById('lesson-planner-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const targetClass = document.getElementById('lesson-class').value;
    const subject = document.getElementById('lesson-subject').value;
    const topic = document.getElementById('lesson-topic').value.trim();
    const duration = document.getElementById('lesson-duration').value;
    const objective = document.getElementById('lesson-objective').value.trim();

    const planDraft = `LESSON PLAN DRAFT\nTopic: ${topic}\nSubject: ${subject} | Class: ${targetClass} | Duration: ${duration} Mins\nLearning Objective: ${objective || 'Students will understand and apply core principles of ' + topic}\n\n1. Hook & Introduction (10 mins):\n- Present a real-world scenario demonstrating ${topic}.\n- Activate prior knowledge with an open question.\n\n2. Direct Instruction & Modeling (15 mins):\n- Define key terminology on the board.\n- Work through two representative problem sets or concepts.\n\n3. Guided Student Activity (15 mins):\n- Small group problem solving and structured peer discussion.\n\n4. Exit Assessment (5 mins):\n- Quick 2-question formative check.`;

    const container = document.getElementById('lesson-output-container');
    container.innerHTML = `
        <div class="tool-output">
            <b>Editable Lesson Plan Draft:</b>
            <textarea id="lesson-plan-editable" rows="12">${escapeHtml(planDraft)}</textarea>
            <div class="tool-output-actions">
                <button class="primary-button small" type="button" onclick="copyToolText('lesson-plan-editable')">Copy to Clipboard</button>
                <button class="light-button small" type="button" onclick="printToolText('lesson-plan-editable', 'Lesson Plan')">Print</button>
            </div>
        </div>
    `;
});

document.getElementById('question-paper-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const targetClass = document.getElementById('paper-class').value;
    const subject = document.getElementById('paper-subject').value;
    const totalMarks = document.getElementById('paper-marks-total').value;
    const difficulty = document.getElementById('paper-level').value;
    const count = document.getElementById('paper-num-questions').value;

    const paperDraft = `EXAMINATION QUESTION PAPER DRAFT\nSubject: ${subject} | Target: ${targetClass}\nMaximum Marks: ${totalMarks} | Difficulty: ${difficulty}\nTime Allowed: 90 Minutes\n\nSECTION A (Multiple Choice & Recall - 1 Mark each):\n1. Define the fundamental unit of measurement in ${subject}.\n2. State the primary law governing this process.\n\nSECTION B (Short Answer & Application - 3 Marks each):\n3. Solve the given numerical equation with intermediate steps.\n4. Explain two distinct advantages of this method.\n\nSECTION C (Long Answer & Critical Thinking - 5 Marks each):\n5. Detail the comprehensive experimental setup with a labeled diagram.\n\nANSWER KEY & RUBRIC:\n- Question 1: Accurate definition (1m)\n- Question 5: Diagram (2m), Explanation (3m)`;

    const container = document.getElementById('paper-output-container');
    container.innerHTML = `
        <div class="tool-output">
            <b>Editable Question Paper Draft:</b>
            <textarea id="question-paper-editable" rows="14">${escapeHtml(paperDraft)}</textarea>
            <div class="tool-output-actions">
                <button class="primary-button small" type="button" onclick="copyToolText('question-paper-editable')">Copy to Clipboard</button>
                <button class="light-button small" type="button" onclick="printToolText('question-paper-editable', 'Question Paper')">Print</button>
            </div>
        </div>
    `;
});

function copyToolText(textareaId) {
    const text = document.getElementById(textareaId).value;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard successfully.');
    }).catch(() => {
        alert('Copied to clipboard.');
    });
}

function printToolText(textareaId, title) {
    const text = document.getElementById(textareaId).value;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
        printWindow.document.write(`<html><head><title>${title}</title></head><body onload="window.print()"><pre style="font-family:sans-serif; white-space:pre-wrap; padding:20px;">${escapeHtml(text)}</pre></body></html>`);
        printWindow.document.close();
    }
}

// Section 16: Digital Library & Transport Implementation
function filterLibrary() {
    const search = (document.getElementById('library-search')?.value || '').toLowerCase();
    const subject = document.getElementById('library-subject-filter')?.value || 'all';
    const type = document.getElementById('library-type-filter')?.value || 'all';
    const list = document.getElementById('library-list');
    if (!list) return;

    const filtered = digitalLibrary.filter((item) => {
        const matchSearch = item.title.toLowerCase().includes(search) || item.author.toLowerCase().includes(search);
        const matchSub = subject === 'all' || item.subject === subject;
        const matchType = type === 'all' || item.type === type;
        return matchSearch && matchSub && matchType;
    });

    document.getElementById('library-count').textContent = `${filtered.length} resources`;

    const student = getCurrentStudent();
    list.innerHTML = filtered.map((item) => {
        const isBorrowed = libraryTransactions.some((t) => t.resourceId === item.id && t.studentId === student?.id && !t.returned);

        return `<div class="material-card">
            <span class="resource-icon ${item.type === 'book' ? 'book' : ''}">${item.type.toUpperCase().slice(0, 3)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.author)} · Format: ${escapeHtml(item.type.toUpperCase())}</p>
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="status ${isBorrowed ? 'pending' : 'paid'}">${isBorrowed ? 'Checked Out' : 'Available'}</span>
                <button class="text-button" type="button" onclick="toggleLibraryBorrow('${item.id}')">${isBorrowed ? 'Return Demo' : 'Borrow Demo'}</button>
            </div>
        </div>`;
    }).join('') || '<p class="muted">No learning resources matched your search filter.</p>';

    renderBorrowedLibraryItems();
}

function toggleLibraryBorrow(resourceId) {
    const student = getCurrentStudent();
    if (!student) return;

    const existing = libraryTransactions.find((t) => t.resourceId === resourceId && t.studentId === student.id && !t.returned);
    if (existing) {
        existing.returned = true;
    } else {
        libraryTransactions.push({
            id: `lib-tx-${Date.now()}`,
            resourceId,
            studentId: student.id,
            borrowedAt: new Date().toISOString(),
            returned: false
        });
    }

    saveStore('libraryTransactions', libraryTransactions);
    filterLibrary();
}

function renderBorrowedLibraryItems() {
    const container = document.getElementById('borrowed-resources-list');
    const student = getCurrentStudent();
    if (!container || !student) return;

    const activeBorrows = libraryTransactions.filter((t) => t.studentId === student.id && !t.returned);

    if (!activeBorrows.length) {
        container.innerHTML = '<p class="muted">You have no active demo book checkouts.</p>';
        return;
    }

    container.innerHTML = activeBorrows.map((t) => {
        const item = digitalLibrary.find((d) => d.id === t.resourceId);
        return `<div class="account-row">
            <div>
                <b>${item ? escapeHtml(item.title) : 'Resource'}</b>
                <small>Borrowed on ${new Date(t.borrowedAt).toLocaleDateString('en-GB')}</small>
            </div>
            <button class="primary-button small" type="button" onclick="toggleLibraryBorrow('${t.resourceId}')">Return Resource</button>
        </div>`;
    }).join('');
}

// Transport Module (Shows ONLY selected student's assigned route)
function renderTransportInfo() {
    const student = getCurrentStudent();
    if (!student) return;

    const route = transportRoutes.find((r) => r.id === student.transportRouteId) || transportRoutes[0];

    document.getElementById('transport-subtitle').textContent = `Assigned transport details for ${student.name} (${student.className}-${student.section}).`;
    document.getElementById('transport-route-num').textContent = route.routeNumber;
    document.getElementById('transport-route-name').textContent = route.routeName;
    document.getElementById('transport-pickup-time').textContent = `Morning pickup: ${route.pickupTime} · Afternoon drop: ${route.dropTime}`;
    document.getElementById('transport-vehicle').textContent = route.vehicleNumber;
    document.getElementById('transport-driver').textContent = route.driverName;
    document.getElementById('transport-driver-contact').textContent = route.driverContact;
    document.getElementById('transport-coordinator').textContent = route.coordinatorContact;
    document.getElementById('transport-status').textContent = route.status;

    const stopsContainer = document.getElementById('transport-stops-list');
    if (stopsContainer) {
        stopsContainer.innerHTML = route.stops.map((s) => `
            <div class="route-stop ${s.active ? 'active' : ''}">
                <b>${escapeHtml(s.time)}</b>
                <span>${escapeHtml(s.stop)} ${s.active ? '· Your pickup point' : ''}</span>
            </div>
        `).join('');
    }
}

// Student & Teacher Dashboards & Auxiliary
function renderStudentDashboard() {
    const student = getCurrentStudent();
    if (!student) return;

    document.getElementById('student-welcome-date').textContent = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase();
    document.getElementById('student-welcome-name').textContent = `Good day, ${student.name}.`;
    document.getElementById('student-welcome-class').textContent = `${student.className}-${student.section} · Roll No. ${student.roll}`;

    // Attendance stats
    const attRecords = attendanceRecords.filter((r) => r.studentId === student.id);
    const attended = attRecords.filter((r) => r.status === 'Present' || r.status === 'Late').length;
    const rate = attRecords.length ? Math.round((attended / attRecords.length) * 100) : 100;
    document.getElementById('student-stat-attendance').textContent = `${rate}%`;
    document.getElementById('student-stat-attended-days').textContent = `${attended} / ${attRecords.length} days attended`;

    // Active homework count
    const activeHw = homeworkRecords.filter((h) => h.classId === student.classId && h.status === 'Published');
    document.getElementById('student-stat-homework').textContent = activeHw.length;

    // Demo metrics clearly labeled
    document.getElementById('student-stat-streak').textContent = '12 days';
    document.getElementById('student-stat-rank').textContent = '#08 of 42';

    // Recent published marks
    const recentMarksList = document.getElementById('student-recent-marks-list');
    const published = marksRecords.filter((m) => m.studentId === student.id && m.status === 'Published');
    if (published.length) {
        recentMarksList.innerHTML = published.slice(-3).reverse().map((m) => `<div><b>${escapeHtml(m.subject)}</b><span>Score: ${m.score} / ${m.maximumMarks} (${m.percentage}%) · Grade ${m.grade}</span></div>`).join('');
    } else {
        recentMarksList.innerHTML = '<p class="muted">No published examination scores yet.</p>';
    }
}

function renderTeacherDashboard() {
    const teacher = currentAccount;
    if (!teacher || teacher.role !== 'teacher') return;

    const teacherClasses = getTeacherClasses(teacher);
    document.getElementById('teacher-assigned-classes').textContent = teacherClasses.length;

    const teacherClassIds = teacherClasses.map((c) => c.id);
    const enrolledStudents = students.filter((s) => teacherClassIds.includes(s.classId) && s.status === 'Active');
    document.getElementById('teacher-total-students').textContent = enrolledStudents.length;

    // Today's attendance for teacher classes
    const todayAtt = attendanceRecords.filter((r) => r.date === todayISO && teacherClassIds.includes(r.classId));
    const presentCount = todayAtt.filter((r) => r.status === 'Present' || r.status === 'Late').length;
    const rate = todayAtt.length ? Math.round((presentCount / todayAtt.length) * 100) : 0;
    document.getElementById('teacher-attendance-rate').textContent = `${rate}%`;
    document.getElementById('teacher-attendance-count').textContent = `${presentCount} present today`;

    // Homework count & pending reviews
    const assignedHw = homeworkRecords.filter((h) => teacherClassIds.includes(h.classId));
    document.getElementById('teacher-homework-count').textContent = assignedHw.length;
    let pendingReviews = 0;
    assignedHw.forEach((h) => {
        h.submissions?.forEach((s) => {
            if (s.status !== 'Reviewed') pendingReviews += 1;
        });
    });
    document.getElementById('teacher-homework-pending-reviews').textContent = `${pendingReviews} reviews pending`;

    // Class performance summary bars
    const perfContainer = document.getElementById('teacher-class-performance');
    if (perfContainer) {
        const subjects = teacher.assignedSubjects || ['Mathematics', 'Science'];
        perfContainer.innerHTML = subjects.map((sub) => {
            const subMarks = marksRecords.filter((m) => m.subject === sub);
            const avg = subMarks.length ? Math.round(subMarks.reduce((sum, m) => sum + m.percentage, 0) / subMarks.length) : 80;
            return `
                <div class="progress-row">
                    <span>${escapeHtml(sub)}</span>
                    <b>${avg}% Average</b>
                    <div class="progress"><i style="width:${avg}%"></i></div>
                </div>
            `;
        }).join('');
    }
}

function renderTeacherStudentsRoster() {
    const filter = document.getElementById('teacher-students-class-filter');
    const tbody = document.querySelector('#teacher-students-table tbody');
    if (!tbody) return;

    const teacherClasses = getTeacherClasses();
    if (filter && filter.options.length === 0) {
        filter.innerHTML = teacherClasses.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}-${escapeHtml(c.section)}</option>`).join('');
    }

    const classId = filter?.value || teacherClasses[0]?.id;
    const roster = students.filter((s) => s.classId === classId && s.status === 'Active');

    if (!roster.length) {
        tbody.innerHTML = '<tr><td colspan="7" class="muted">No students in this class section.</td></tr>';
        return;
    }

    tbody.innerHTML = roster.map((s) => {
        const att = attendanceRecords.filter((r) => r.studentId === s.id);
        const attended = att.filter((r) => r.status === 'Present' || r.status === 'Late').length;
        const rate = att.length ? `${Math.round((attended / att.length) * 100)}%` : '—';

        return `<tr>
            <td>${escapeHtml(s.roll)}</td>
            <td><b>${escapeHtml(s.name)}</b></td>
            <td><code>${escapeHtml(s.admissionNumber)}</code></td>
            <td>${escapeHtml(s.className)}-${escapeHtml(s.section)}</td>
            <td>${escapeHtml(s.parentName)}</td>
            <td>${escapeHtml(s.parentMobile)}</td>
            <td><strong>${rate}</strong></td>
        </tr>`;
    }).join('');
}

document.getElementById('teacher-students-class-filter')?.addEventListener('change', renderTeacherStudentsRoster);

// Parent Request Meeting Feature
document.getElementById('parent-meeting-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const child = getSelectedParentChild();
    const teacherId = document.getElementById('meeting-teacher-select').value;
    const teacher = teachers.find((t) => t.id === teacherId);
    const date = document.getElementById('meeting-date').value;
    const time = document.getElementById('meeting-time').value;
    const purpose = document.getElementById('meeting-purpose').value.trim();

    const newMeeting = {
        id: `meet-${Date.now()}`,
        parentAccountId: currentAccount.id,
        parentName: currentAccount.name,
        studentId: child.id,
        studentName: child.name,
        teacherId,
        teacherName: teacher ? teacher.name : 'Teacher',
        preferredDate: date,
        preferredTime: time,
        purpose,
        status: 'Pending',
        createdAt: new Date().toISOString()
    };

    parentMeetings.unshift(newMeeting);
    saveStore('parentMeetings', parentMeetings);

    document.getElementById('parent-meeting-message').textContent = 'Meeting request submitted to the faculty.';
    event.target.reset();
    renderParentMeetingHistory();
});

function renderParentMeetingHistory() {
    const list = document.getElementById('parent-meeting-history-list');
    const teacherSelect = document.getElementById('meeting-teacher-select');
    const childDisplay = document.getElementById('meeting-child-display');
    const child = getSelectedParentChild();
    if (!list) return;

    if (childDisplay && child) childDisplay.value = `${child.name} (${child.className}-${child.section})`;
    if (teacherSelect && teacherSelect.options.length === 0) {
        teacherSelect.innerHTML = teachers.map((t) => `<option value="${t.id}">${escapeHtml(t.name)} (${t.assignedSubjects.join(', ')})</option>`).join('');
    }

    const myMeetings = parentMeetings.filter((m) => m.parentAccountId === currentAccount?.id);
    if (!myMeetings.length) {
        list.innerHTML = '<p class="muted">No conference requests recorded.</p>';
        return;
    }

    list.innerHTML = myMeetings.map((m) => `
        <div class="calendar-list" style="margin-bottom:8px;">
            <div>
                <b>Meeting with ${escapeHtml(m.teacherName)} (${escapeHtml(m.preferredDate)} at ${escapeHtml(m.preferredTime)})</b>
                <span>Student: ${escapeHtml(m.studentName)} · Topic: ${escapeHtml(m.purpose)}</span>
                <span class="status ${m.status === 'Confirmed' ? 'paid' : 'pending'}" style="margin-top:4px;">${escapeHtml(m.status)}</span>
            </div>
        </div>
    `).join('');
}

function openResource(name) {
    document.getElementById('resource-message').textContent = `Opening school resource: "${name}" in reader...`;
}

// Dropdown Utilities
function populateClassDropdowns() {
    const dropdownIds = ['admission-class', 'homework-class', 'marks-class-select', 'fee-class-select', 'teacher-quiz-class', 'lesson-class', 'paper-class', 'teacher-manage-classes'];
    dropdownIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.options.length === 0) {
            el.innerHTML = classes.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}-${escapeHtml(c.section)}</option>`).join('');
        }
    });

    const studentSelect = document.getElementById('fee-student-select');
    if (studentSelect && studentSelect.options.length === 0) {
        studentSelect.innerHTML = students.map((s) => `<option value="${s.id}">${escapeHtml(s.name)} (${escapeHtml(s.className)}-${escapeHtml(s.section)})</option>`).join('');
    }

    const parentChildrenSelect = document.getElementById('parent-manage-children');
    if (parentChildrenSelect && parentChildrenSelect.options.length === 0) {
        parentChildrenSelect.innerHTML = students.map((s) => `<option value="${s.id}">${escapeHtml(s.name)} (${escapeHtml(s.className)}-${escapeHtml(s.section)})</option>`).join('');
    }

    const accountStudentSelect = document.getElementById('account-student-select');
    if (accountStudentSelect && accountStudentSelect.options.length === 0) {
        accountStudentSelect.innerHTML = students.map((s) => `<option value="${s.id}">${escapeHtml(s.name)} (${escapeHtml(s.className)}-${escapeHtml(s.section)})</option>`).join('');
    }
}

// School Settings & Data Reset
function loadSettingsForm() {
    const fields = ['name', 'initials', 'tagline', 'principal', 'phone', 'email', 'address', 'color'];
    fields.forEach((k) => {
        const input = document.getElementById(`setting-${k}`);
        if (input) input.value = schoolSettings[k] || '';
    });
}

document.getElementById('settings-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = ['name', 'initials', 'tagline', 'principal', 'phone', 'email', 'address', 'color'];
    fields.forEach((k) => {
        const input = document.getElementById(`setting-${k}`);
        if (input) schoolSettings[k] = input.value.trim();
    });

    saveStore('schoolSettings', schoolSettings);
    applySchoolSettings();
    document.getElementById('settings-message').textContent = 'School settings saved successfully.';
    document.getElementById('settings-message').className = 'form-message';
});

function applySchoolSettings() {
    document.querySelectorAll('.brand-mark').forEach((m) => { m.textContent = schoolSettings.initials || 'FS'; });
    const brandName = document.getElementById('app-brand-name');
    if (brandName) brandName.textContent = schoolSettings.name || 'FutureSchool';
    document.documentElement.style.setProperty('--teal', schoolSettings.color || '#087f73');
    document.title = `${schoolSettings.name || 'FutureSchool'} | School Management`;
}

document.getElementById('reset-demo-data')?.addEventListener('click', () => {
    if (!window.confirm('Reset all demo data back to clean factory state? All changes will be reinitialized.')) return;
    localStorage.clear();
    window.location.reload();
});

// Mobile Sidebar Toggle
document.getElementById('menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('mobile-open');
});

// Multi-language switch
const translations = {
    en: {},
    te: {
        'Admin Dashboard': 'అడ్మిన్ డాష్‌బోర్డ్',
        'Teacher Dashboard': 'ఉపాధ్యాయ డాష్‌బోర్డ్',
        'Parent Dashboard': 'తల్లిదండ్రుల డాష్‌బోర్డ్',
        'Student Dashboard': 'విద్యార్థి డాష్‌బోర్డ్',
        'Attendance': 'హాజరు',
        'Homework': 'హోమ్‌వర్క్',
        'Marks': 'మార్కులు',
        'Fees': 'ఫీజులు',
        'Report Cards': 'ప్రగతి పత్రాలు',
        'Log out': 'లాగ్ అవుట్'
    }
};

document.getElementById('language-select')?.addEventListener('change', (e) => {
    const lang = e.target.value;
    localStorage.setItem('futureschoolLanguage', lang);
    const dict = translations[lang] || {};
    document.querySelectorAll('.side-nav button span:first-child').forEach((el) => {
        if (!el.dataset.original) el.dataset.original = el.textContent.trim();
        const original = el.dataset.original;
        el.textContent = dict[original] || original;
    });
});

// Initial Startup
applySchoolSettings();
renderInteractiveQuestion();
