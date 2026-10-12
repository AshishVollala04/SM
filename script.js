// FutureSchool - Complete School Management System (Local Prototype)

// Role Access and Navigation Configuration
const roleProfiles = {
    student: {
        startPage: 'student',
        access: ['student', 'attendance', 'homework', 'marks', 'reports', 'questions', 'tutor', 'materials', 'library', 'exams', 'timetable', 'transport']
    },
    parent: {
        startPage: 'parent',
        access: ['parent', 'attendance', 'homework', 'marks', 'reports', 'fees', 'parent-payments', 'exams', 'timetable', 'transport', 'materials', 'parent-meeting', 'messages', 'complaints']
    },
    teacher: {
        startPage: 'teacher',
        access: ['teacher', 'teacher-students', 'attendance', 'homework', 'marks', 'reports', 'questions', 'timetable', 'materials', 'exams', 'notifications', 'lesson-planner', 'question-paper', 'messages', 'complaints']
    },
    admin: {
        startPage: 'admin-dashboard',
        access: ['admin-dashboard', 'admissions', 'admin-students', 'admin-teachers', 'admin-parents', 'admin', 'classes', 'subject-allocation', 'attendance', 'homework', 'marks', 'reports', 'exams', 'fees', 'admin-payments', 'admin-defaulters', 'notifications', 'settings', 'academic-years', 'promotion', 'certificates', 'staff-attendance', 'calendar', 'complaints']
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
            items: [{ page: 'notifications', label: 'Notifications' }, { page: 'complaints', label: 'Complaints' }]
        },
        {
            heading: 'ADMINISTRATION',
            items: [{ page: 'settings', label: 'School Settings' }, { page: 'academic-years', label: 'Academic Years' }, { page: 'subject-allocation', label: 'Subject Allocation' }, { page: 'promotion', label: 'Student Promotion' }, { page: 'certificates', label: 'Certificates' }, { page: 'staff-attendance', label: 'Staff Attendance' }, { page: 'calendar', label: 'School Calendar' }]
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
            items: [{ page: 'notifications', label: 'Notifications' }, { page: 'messages', label: 'Parent Messages' }, { page: 'complaints', label: 'Complaints' }]
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
                { page: 'parent-meeting', label: 'Request Meeting' },
                { page: 'messages', label: 'Parent Messages' },
                { page: 'complaints', label: 'Complaints' }
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
                { page: 'marks', label: 'My Published Marks' },
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
    { id: 'c-10a', name: 'Class 10', section: 'A', gradeNumber: 10, schoolLevel: 'Senior', classTeacherId: 't-101', classTeacherName: 'Mr. Joseph', active: true },
    { id: 'c-9b', name: 'Class 9', section: 'B', gradeNumber: 9, schoolLevel: 'Senior', classTeacherId: 't-102', classTeacherName: 'Ms. Nair', active: true },
    { id: 'c-8a', name: 'Class 8', section: 'A', gradeNumber: 8, schoolLevel: 'Senior', classTeacherId: 't-103', classTeacherName: 'Mrs. Thomas', active: true }
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
        teacherType: 'Senior',
        active: true
    },
    {
        id: 't-102',
        name: 'Ms. Nair',
        email: 'nair@school.edu',
        phone: '+91 98888 00002',
        teacherType: 'Senior',
        active: true
    },
    {
        id: 't-103',
        name: 'Mrs. Thomas',
        email: 'thomas@school.edu',
        phone: '+91 98888 00003',
        teacherType: 'Primary',
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
      { id: 's-101_' + todayISO, studentId: 's-101', classId: 'c-10a', academicYearId: 'ay-2026-27', date: todayISO, morningStatus: 'Present', afternoonStatus: 'Present', dailyResult: 'Full Day', markedByTeacherId: 't-101', markedByAccountId: 'account-teacher-1', correctionReason: '', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { id: 's-102_' + todayISO, studentId: 's-102', classId: 'c-10a', academicYearId: 'ay-2026-27', date: todayISO, morningStatus: 'Present', afternoonStatus: 'Absent', dailyResult: 'Half Day', markedByTeacherId: 't-101', markedByAccountId: 'account-teacher-1', correctionReason: '', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { id: 's-103_' + todayISO, studentId: 's-103', classId: 'c-9b', academicYearId: 'ay-2026-27', date: todayISO, morningStatus: 'Absent', afternoonStatus: 'Absent', dailyResult: 'Absent', markedByTeacherId: 't-102', markedByAccountId: null, correctionReason: 'Unwell', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
  ];
const initialHomework = [
    {
        id: 'hw-101',
        classId: 'c-10a',
        className: 'Class 10-A',
        subject: 'Maths',
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
        subject: 'Physics',
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
        id: 'm_s101_c10a_Maths_Unit 2',
        studentId: 's-101',
        studentName: 'Aanya Sharma',
        classId: 'c-10a',
        subject: 'Maths',
        exam: 'Unit 2',
        maximumMarks: 100,
        score: 86,
        percentage: 86,
        grade: 'A',
        status: 'Published',
        savedAt: '2026-10-10T12:00:00Z'
    },
    {
        id: 'm_s101_c10a_Physics_Unit 2',
        studentId: 's-101',
        studentName: 'Aanya Sharma',
        classId: 'c-10a',
        subject: 'Physics',
        exam: 'Unit 2',
        maximumMarks: 100,
        score: 92,
        percentage: 92,
        grade: 'A+',
        status: 'Published',
        savedAt: '2026-10-10T12:00:00Z'
    },
    {
        id: 'm_s101_c10a_English_Unit 2',
        studentId: 's-101',
        studentName: 'Aanya Sharma',
        classId: 'c-10a',
        subject: 'English',
        exam: 'Unit 2',
        maximumMarks: 100,
        score: 81,
        percentage: 81,
        grade: 'A',
        status: 'Published',
        savedAt: '2026-10-10T12:00:00Z'
    },
    {
        id: 'm_s102_c10a_Maths_Unit 2',
        studentId: 's-102',
        studentName: 'Rahul Sharma',
        classId: 'c-10a',
        subject: 'Maths',
        exam: 'Unit 2',
        maximumMarks: 100,
        score: 74,
        percentage: 74,
        grade: 'B',
        status: 'Published',
        savedAt: '2026-10-10T12:00:00Z'
    },
    {
        id: 'm_s102_c10a_Physics_Unit 2',
        studentId: 's-102',
        studentName: 'Rahul Sharma',
        classId: 'c-10a',
        subject: 'Physics',
        exam: 'Unit 2',
        maximumMarks: 100,
        score: 78,
        percentage: 78,
        grade: 'B',
        status: 'Published',
        savedAt: '2026-10-10T12:00:00Z'
    },
    {
        id: 'm_s103_c9b_Maths_Unit 2',
        studentId: 's-103',
        studentName: 'Anitha Rao',
        classId: 'c-9b',
        subject: 'Maths',
        exam: 'Unit 2',
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
        senderId: 'account-admin-1',
        senderRole: 'admin',
        readByAccountIds: []
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
        senderId: 'account-teacher-1',
        senderRole: 'teacher',
        readByAccountIds: []
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
        senderId: 'account-admin-1',
        senderRole: 'admin',
        readByAccountIds: []
    }
];

const initialQuizzes = [
    {
        id: 'quiz-algebra-1',
        title: 'Algebra and Quadratic Check-in',
        subject: 'Maths',
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

const APP_SCHEMA_VERSION = 5;

function cloneSeed(value) {
    return typeof structuredClone === 'function' ? structuredClone(value) : JSON.parse(JSON.stringify(value));
}

function migrateStoredData() {
    const version = Number(localStorage.getItem('futureschoolSchemaVersion') || 0);
    if (version >= APP_SCHEMA_VERSION) return;
    const yearId = academicYears?.find((year) => year.isCurrent)?.id || academicYears?.[0]?.id || 'ay-2026-27';
    teachers = teachers.map((teacher) => ({ ...teacher, teacherDivision: teacher.teacherDivision || teacher.teacherType || 'Senior' }));
    classes = classes.map((schoolClass) => ({ ...schoolClass, gradeNumber: schoolClass.gradeNumber || Number(schoolClass.name?.match(/\d+/)?.[0] || 0) || null, schoolLevel: schoolClass.schoolLevel || (Number(schoolClass.name?.match(/\d+/)?.[0] || 10) <= 7 ? 'Primary' : 'Senior'), classTeacherId: schoolClass.classTeacherId || schoolClass.teacherId || null, classTeacherName: schoolClass.classTeacherName || schoolClass.teacherName || '' }));
    const activeYearId = yearId;
    teachers.forEach((teacher) => (teacher.assignedClassIds || []).forEach((classId) => (teacher.assignedSubjects || []).forEach((subject) => {
        const schoolClass = classes.find((item) => item.id === classId);
        if (!schoolClass || !subjectsForClass(classId).includes(subject)) return;
        if (!subjectAllocations.some((allocation) => allocation.academicYearId === activeYearId && allocation.classId === classId && allocation.subject === subject)) {
            subjectAllocations.push({ id: createUniqueId('allocation'), academicYearId: activeYearId, classId, subject, teacherId: teacher.id, teacherName: teacher.name, active: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
        }
    })));
    attendanceRecords = attendanceRecords.map((record) => {
        if (record.morningStatus && record.afternoonStatus) return { ...record, academicYearId: record.academicYearId || yearId };
        const legacy = record.status || 'Present';
        const migratedStatus = legacy === 'Half Day' ? ['Present', 'Absent'] : legacy === 'Late' ? ['Present', 'Present'] : [legacy, legacy];
        return { ...record, academicYearId: record.academicYearId || yearId, morningStatus: migratedStatus[0], afternoonStatus: migratedStatus[1], dailyResult: calculateDailyAttendanceResult(migratedStatus[0], migratedStatus[1]), migrationNote: legacy === 'Late' ? 'Migrated from legacy Late status' : 'Migrated from legacy attendance status' };
    });
    const examMap = { 'Unit Test 1': 'Unit 1', 'Unit Test 2': 'Unit 2', 'Term 1 Examination': 'Quarterly', 'Term 2 Examination': 'Half Yearly' };
    marksRecords = marksRecords.map((mark) => ({ ...mark, exam: examMap[mark.exam] || mark.exam, academicYearId: mark.academicYearId || yearId, term: undefined, status: ['Draft', 'Submitted For Verification', 'Verified', 'Rejected', 'Published'].includes(mark.status) ? mark.status : mark.status === 'Published' ? 'Published' : 'Draft', enteredByTeacherId: mark.enteredByTeacherId || mark.teacherId || null, amendments: Array.isArray(mark.amendments) ? mark.amendments : [] }));
    notificationRecords = notificationRecords.map((notification) => ({ ...notification, readByAccountIds: Array.isArray(notification.readByAccountIds) ? notification.readByAccountIds : [] }));
    parentMessages = parentMessages.map((conversation) => ({ ...conversation, messages: (conversation.messages || []).map((message) => ({ ...message, id: message.id || createUniqueId('message-entry'), readByAccountIds: Array.isArray(message.readByAccountIds) ? message.readByAccountIds : [] })) }));
    saveStore('attendance', attendanceRecords);
    saveStore('marks', marksRecords);
    saveStore('notifications', notificationRecords);
    saveStore('parentMessages', parentMessages);
    saveStore('teachers', teachers);
    saveStore('classes', classes);
    saveStore('subjectAllocations', subjectAllocations);
    localStorage.setItem('futureschoolSchemaVersion', String(APP_SCHEMA_VERSION));
}

function runDemoIntegrityChecks() {
    const checks = [
        ['Students reference existing classes', students.every((student) => classes.some((schoolClass) => schoolClass.id === student.classId))],
        ['Students reference existing parents', students.every((student) => parents.some((parent) => parent.id === student.parentAccountId))],
        ['Parents reference existing students', parents.every((parent) => (parent.linkedStudentIds || []).every((studentId) => students.some((student) => student.id === studentId)))],
        ['Allocations reference existing classes', subjectAllocations.filter((allocation) => allocation.active !== false).every((allocation) => classes.some((schoolClass) => schoolClass.id === allocation.classId))],
        ['Attendance references existing students', attendanceRecords.every((record) => students.some((student) => student.id === record.studentId))],
        ['Marks reference existing students and classes', marksRecords.every((mark) => students.some((student) => student.id === mark.studentId) && classes.some((schoolClass) => schoolClass.id === mark.classId))],
        ['Fee invoices reference existing students', feeInvoices.every((invoice) => students.some((student) => student.id === invoice.studentId))],
        ['Payments reference existing invoices', paymentRecords.every((payment) => feeInvoices.some((invoice) => invoice.invoiceId === payment.invoiceId))],
        ['Notifications reference existing students', notificationRecords.filter((notification) => notification.studentId).every((notification) => students.some((student) => student.id === notification.studentId))],
        ['Quiz target classes exist', publishedQuizzes.every((quiz) => classes.some((schoolClass) => schoolClass.id === quiz.targetClass))],
        ['No duplicate admission numbers', new Set(students.map((student) => student.admissionNumber)).size === students.length],
        ['No duplicate normalized parent emails', new Set(parents.map((parent) => normalizeEmail(parent.email))).size === parents.length],
        ['No duplicate login emails', new Set(accountRecords.map((account) => normalizeEmail(account.email))).size === accountRecords.length],
        ['No duplicate invoice IDs', new Set(feeInvoices.map((invoice) => invoice.invoiceId)).size === feeInvoices.length],
        ['Attendance records have academic years', attendanceRecords.every((record) => Boolean(record.academicYearId))],
        ['Marks records have academic years and exams', marksRecords.every((mark) => Boolean(mark.academicYearId && mark.exam))],
        ['Schema migration is current', Number(localStorage.getItem('futureschoolSchemaVersion') || 0) >= APP_SCHEMA_VERSION],
        ['Active classes have valid Class Teachers', classes.filter((schoolClass) => schoolClass.active).every((schoolClass) => !schoolClass.classTeacherId || teachers.some((teacher) => teacher.active && teacher.id === schoolClass.classTeacherId))],
        ['Primary and Senior classes have valid subject coverage', classes.filter((schoolClass) => schoolClass.active && schoolClass.gradeNumber >= 1).every((schoolClass) => subjectsForClass(schoolClass.id).every((subject) => subjectAllocations.some((allocation) => allocation.active !== false && allocation.academicYearId === defaultAcademicYearId && allocation.classId === schoolClass.id && allocation.subject === subject && teachers.some((teacher) => teacher.active && teacher.id === allocation.teacherId))))],
        ['No duplicate active subject allocations', new Set(subjectAllocations.filter((allocation) => allocation.active !== false).map((allocation) => `${allocation.academicYearId}:${allocation.classId}:${allocation.subject}`)).size === subjectAllocations.filter((allocation) => allocation.active !== false).length],
        ['All active allocations reference active Teachers', subjectAllocations.filter((allocation) => allocation.active !== false).every((allocation) => teachers.some((teacher) => teacher.active && teacher.id === allocation.teacherId))],
        ['No invalid Science allocation for Classes 8-10', subjectAllocations.filter((allocation) => allocation.subject === 'Science').every((allocation) => (classes.find((schoolClass) => schoolClass.id === allocation.classId)?.gradeNumber || 0) < 8)],
        ['No invalid Physics or Biology allocation for Classes 1-7', subjectAllocations.filter((allocation) => ['Physics', 'Biology'].includes(allocation.subject)).every((allocation) => (classes.find((schoolClass) => schoolClass.id === allocation.classId)?.gradeNumber || 0) >= 8)]
    ];
    return { passed: checks.filter((check) => check[1]).length, failed: checks.filter((check) => !check[1]).length, checks };
}

function renderDemoIntegrityChecks() {
    const container = document.getElementById('demo-qa-results');
    if (!container || currentRole !== 'admin') return;
    const result = runDemoIntegrityChecks();
        container.innerHTML = result.checks.map(([label, passed]) => `<div class="account-row"><div><b>${escapeHtml(label)}</b><small>${passed ? 'Pass' : 'Fail: needs review'}</small></div><span class="status ${passed ? 'paid' : 'absent'}">${passed ? 'Pass' : 'Fail'}</span></div>`).join('');
}

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
    const clonedFallback = cloneSeed(fallback);
    localStorage.setItem(key, JSON.stringify(clonedFallback));
    return clonedFallback;
}

function saveStore(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error(`Error saving localStorage key: ${key}`, error);
        const message = document.getElementById('storage-error-message');
        if (message) {
            message.textContent = 'Your browser storage is full. Export or reset demo data before saving more records.';
            message.className = 'form-message error';
        }
        return false;
    }
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
let feeCategories = getStore('feeCategories', ['Tuition Fee', 'Admission Fee', 'Annual Fee', 'Examination Fee', 'Transport Fee', 'Special Fee', 'Custom Fee']);
let routeFees = getStore('routeFees', []);
let notificationRecords = getStore('notifications', initialNotifications);
let publishedQuizzes = getStore('futureschoolQuizzes', initialQuizzes);
let quizAttempts = getStore('futureschoolQuizAttempts', initialQuizAttempts);
let parentMeetings = getStore('parentMeetings', initialMeetings);
let digitalLibrary = getStore('digitalLibrary', initialDigitalLibrary);
let libraryTransactions = getStore('libraryTransactions', []);
let schoolSettings = getStore('schoolSettings', initialSchoolSettings);
schoolSettings.passPercentage = Number(schoolSettings.passPercentage || 35);
saveStore('schoolSettings', schoolSettings);
let academicYears = getStore('academicYears', [{ id: 'ay-2026-27', name: '2026-2027', startDate: '2026-06-01', endDate: '2027-04-30', status: 'Active', isCurrent: true }]);
let calendarEvents = getStore('calendarEvents', [{ id: 'event-1', title: 'Term 2 examinations', eventType: 'Examination', startDate: '2026-12-10', endDate: '2026-12-18', audience: 'Everyone', description: 'Published examination schedule.', status: 'Published' }]);
let staffAttendanceRecords = getStore('staffAttendance', []);
let promotionHistory = getStore('promotionHistory', []);
let certificateHistory = getStore('certificateHistory', []);
let parentMessages = getStore('parentMessages', []);
let complaints = getStore('complaints', []);
complaints = complaints.map((complaint) => ({ ...complaint, status: complaint.status || 'Open', replies: complaint.replies || [], internalNotes: complaint.internalNotes || [], createdAt: complaint.createdAt || new Date().toISOString(), updatedAt: complaint.updatedAt || complaint.createdAt || new Date().toISOString() }));
saveStore('complaints', complaints);
let teacherNotes = getStore('teacherNotes', []);
let reportCards = getStore('reportCards', []);

const initialSubjectAllocations = [
    // Class 10-A (Class Teacher: Mr. Joseph / t-101)
    { id: 'alloc-10a-telugu', academicYearId: 'ay-2026-27', classId: 'c-10a', subject: 'Telugu', teacherId: 't-103', active: true },
    { id: 'alloc-10a-hindi', academicYearId: 'ay-2026-27', classId: 'c-10a', subject: 'Hindi', teacherId: 't-103', active: true },
    { id: 'alloc-10a-english', academicYearId: 'ay-2026-27', classId: 'c-10a', subject: 'English', teacherId: 't-102', active: true },
    { id: 'alloc-10a-maths', academicYearId: 'ay-2026-27', classId: 'c-10a', subject: 'Maths', teacherId: 't-101', active: true },
    { id: 'alloc-10a-physics', academicYearId: 'ay-2026-27', classId: 'c-10a', subject: 'Physics', teacherId: 't-101', active: true },
    { id: 'alloc-10a-biology', academicYearId: 'ay-2026-27', classId: 'c-10a', subject: 'Biology', teacherId: 't-102', active: true },
    { id: 'alloc-10a-social', academicYearId: 'ay-2026-27', classId: 'c-10a', subject: 'Social', teacherId: 't-103', active: true },

    // Class 9-B (Class Teacher: Ms. Nair / t-102)
    { id: 'alloc-9b-telugu', academicYearId: 'ay-2026-27', classId: 'c-9b', subject: 'Telugu', teacherId: 't-103', active: true },
    { id: 'alloc-9b-hindi', academicYearId: 'ay-2026-27', classId: 'c-9b', subject: 'Hindi', teacherId: 't-103', active: true },
    { id: 'alloc-9b-english', academicYearId: 'ay-2026-27', classId: 'c-9b', subject: 'English', teacherId: 't-102', active: true },
    { id: 'alloc-9b-maths', academicYearId: 'ay-2026-27', classId: 'c-9b', subject: 'Maths', teacherId: 't-101', active: true },
    { id: 'alloc-9b-physics', academicYearId: 'ay-2026-27', classId: 'c-9b', subject: 'Physics', teacherId: 't-101', active: true },
    { id: 'alloc-9b-biology', academicYearId: 'ay-2026-27', classId: 'c-9b', subject: 'Biology', teacherId: 't-102', active: true },
    { id: 'alloc-9b-social', academicYearId: 'ay-2026-27', classId: 'c-9b', subject: 'Social', teacherId: 't-103', active: true },

    // Class 8-A (Class Teacher: Mrs. Thomas / t-103)
    { id: 'alloc-8a-telugu', academicYearId: 'ay-2026-27', classId: 'c-8a', subject: 'Telugu', teacherId: 't-103', active: true },
    { id: 'alloc-8a-hindi', academicYearId: 'ay-2026-27', classId: 'c-8a', subject: 'Hindi', teacherId: 't-103', active: true },
    { id: 'alloc-8a-english', academicYearId: 'ay-2026-27', classId: 'c-8a', subject: 'English', teacherId: 't-103', active: true },
    { id: 'alloc-8a-maths', academicYearId: 'ay-2026-27', classId: 'c-8a', subject: 'Maths', teacherId: 't-101', active: true },
    { id: 'alloc-8a-physics', academicYearId: 'ay-2026-27', classId: 'c-8a', subject: 'Physics', teacherId: 't-101', active: true },
    { id: 'alloc-8a-biology', academicYearId: 'ay-2026-27', classId: 'c-8a', subject: 'Biology', teacherId: 't-102', active: true },
    { id: 'alloc-8a-social', academicYearId: 'ay-2026-27', classId: 'c-8a', subject: 'Social', teacherId: 't-103', active: true }
];

let subjectAllocations = getStore('subjectAllocations', initialSubjectAllocations);
feeInvoices = feeInvoices.map((invoice) => ({ ...invoice, term: invoice.term || 'Full-Year Payment', feeCategory: invoice.feeCategory || invoice.category, balance: Number(invoice.balance ?? invoice.amount) }));
paymentRecords = paymentRecords.map((payment) => ({ ...payment, totalAmount: Number(payment.totalAmount ?? payment.amount ?? 0), allocations: Array.isArray(payment.allocations) ? payment.allocations : payment.invoiceId ? [{ invoiceId: payment.invoiceId, amountApplied: Number(payment.amount || 0) }] : [] }));
saveStore('feeInvoices', feeInvoices);
saveStore('payments', paymentRecords);
let prePrimarySubjects = getStore('prePrimarySubjects', ['Language', 'Numeracy', 'Creative Play']);
teachers = teachers.map((teacher) => ({ ...teacher, teacherType: teacher.teacherType || teacher.teacherDivision || 'Senior', teacherDivision: teacher.teacherDivision || teacher.teacherType || 'Senior' }));
classes = classes.map((schoolClass) => ({ ...schoolClass, classTeacherId: schoolClass.classTeacherId || schoolClass.teacherId || null, classTeacherName: schoolClass.classTeacherName || schoolClass.teacherName || '' }));
saveStore('teachers', teachers);
saveStore('classes', classes);
parentMessages = parentMessages.map((conversation) => ({
    ...conversation,
    status: conversation.status || 'Open',
    createdAt: conversation.createdAt || new Date().toISOString(),
    updatedAt: conversation.updatedAt || conversation.createdAt || new Date().toISOString(),
    messages: (conversation.messages || []).map((message) => ({ ...message, id: message.id || createUniqueId('message-entry'), readByAccountIds: Array.isArray(message.readByAccountIds) ? message.readByAccountIds : [] }))
}));
saveStore('parentMessages', parentMessages);
let activeMessageId = null;
function calculateDailyAttendanceResult(morningStatus, afternoonStatus) { if (morningStatus === 'Present' && afternoonStatus === 'Present') return 'Full Day'; if (morningStatus === 'Absent' && afternoonStatus === 'Absent') return 'Absent'; if (morningStatus === 'Leave' && afternoonStatus === 'Leave') return 'Leave'; if ([morningStatus, afternoonStatus].includes('Leave') && [morningStatus, afternoonStatus].includes('Absent')) return 'Leave'; return 'Half Day'; }
function getStudentAttendanceSummary(studentId, academicYearId = currentAcademicYear()?.id || defaultAcademicYearId) { const records = attendanceRecords.filter((record) => record.studentId === studentId && (record.academicYearId || defaultAcademicYearId) === academicYearId); const fullDays = records.filter((record) => record.dailyResult === 'Full Day').length; const halfDays = records.filter((record) => record.dailyResult === 'Half Day').length; const absentDays = records.filter((record) => record.dailyResult === 'Absent').length; const leaveDays = records.filter((record) => record.dailyResult === 'Leave').length; const workingDays = records.length; const attendedDayEquivalents = fullDays + (halfDays * 0.5); return { fullDays, halfDays, absentDays, leaveDays, workingDays, attendedDayEquivalents, percentage: workingDays ? Math.round((attendedDayEquivalents / workingDays) * 100) : 0 }; }
const defaultAcademicYearId = academicYears.find((year) => year.isCurrent)?.id || academicYears[0]?.id || 'ay-2026-27';
marksRecords = marksRecords.map((mark) => ({
    ...mark,
    academicYearId: mark.academicYearId || defaultAcademicYearId,
    exam: mark.exam || 'Other'
}));
attendanceRecords = attendanceRecords.map((record) => ({ ...record, academicYearId: record.academicYearId || defaultAcademicYearId }));
saveStore('marks', marksRecords);
saveStore('attendance', attendanceRecords);
notificationRecords = notificationRecords.map((notification) => ({
    ...notification,
    senderId: notification.senderId || null,
    senderRole: notification.senderRole || null,
    readByAccountIds: Array.isArray(notification.readByAccountIds) ? notification.readByAccountIds : []
}));
saveStore('notifications', notificationRecords);
migrateStoredData();

publishedQuizzes = publishedQuizzes.map((quiz) => {
    let tId = quiz.teacherId || null;
    let tAccId = quiz.teacherAccountId || null;
    if (!tId && tAccId) {
        const acc = accountRecords.find((a) => a.id === tAccId);
        if (acc?.teacherId) tId = acc.teacherId;
    }
    if (tId && !tAccId) {
        const acc = accountRecords.find((a) => a.teacherId === tId);
        if (acc) tAccId = acc.id;
    }
    const ownershipStatus = (!tId && !tAccId) ? 'Unassigned' : 'Assigned';
    return { ...quiz, teacherId: tId, teacherAccountId: tAccId, ownershipStatus };
});
saveStore('futureschoolQuizzes', publishedQuizzes);

let currentRole = '';
let currentAccount = null;
let currentAccess = [];

// Section 3: Essential Helper Functions
function normalizeEmail(email) {
    return String(email || '').trim().toLowerCase();
}

function getParentByEmail(email) {
    const normalized = normalizeEmail(email);
    return parents.find((parent) => normalizeEmail(parent.email) === normalized);
}

function syncParentStudentRelationship(parentId, studentId) {
    const parent = parents.find((item) => item.id === parentId);
    if (!parent) return;

    parent.linkedStudentIds = Array.isArray(parent.linkedStudentIds) ? parent.linkedStudentIds : [];
    if (!parent.linkedStudentIds.includes(studentId)) parent.linkedStudentIds.push(studentId);

    const account = accountRecords.find((accountRecord) => accountRecord.role === 'parent' && (accountRecord.id === parentId || normalizeEmail(accountRecord.email) === normalizeEmail(parent.email)));
    if (account) {
        account.linkedStudentIds = Array.isArray(account.linkedStudentIds) ? account.linkedStudentIds : [];
        if (!account.linkedStudentIds.includes(studentId)) account.linkedStudentIds.push(studentId);
    }
}

function consolidateParentRecords() {
    const canonicalParents = [];
    const duplicateParentIds = new Set();

    parents.forEach((parent) => {
        const normalized = normalizeEmail(parent.email);
        const existing = canonicalParents.find((item) => normalizeEmail(item.email) === normalized);
        if (!existing) {
            parent.email = normalized;
            parent.linkedStudentIds = Array.isArray(parent.linkedStudentIds) ? parent.linkedStudentIds : [];
            canonicalParents.push(parent);
            return;
        }

        existing.linkedStudentIds = [...new Set([...existing.linkedStudentIds, ...(parent.linkedStudentIds || [])])];
        students.forEach((student) => {
            if (student.parentAccountId === parent.id) student.parentAccountId = existing.id;
        });
        accountRecords.forEach((account) => {
            if (account.role === 'parent' && account.id === parent.id) {
                const canonicalAccount = accountRecords.find((item) => item.role === 'parent' && item.id === existing.id);
                if (canonicalAccount) {
                    canonicalAccount.linkedStudentIds = [...new Set([...(canonicalAccount.linkedStudentIds || []), ...(account.linkedStudentIds || [])])];
                }
                duplicateParentIds.add(parent.id);
            }
        });
    });

    parents = canonicalParents;
    accountRecords = accountRecords.filter((account) => !duplicateParentIds.has(account.id));
    parents.forEach((parent) => parent.linkedStudentIds.forEach((studentId) => {
        const student = students.find((item) => item.id === studentId);
        if (student) student.parentAccountId = parent.id;
        syncParentStudentRelationship(parent.id, studentId);
    }));
    saveStore('parents', parents);
    saveStore('students', students);
    saveStore('futureschoolAccounts', accountRecords);
}

consolidateParentRecords();

function getCurrentStudent() {
    if (currentRole === 'student') {
        return students.find((s) => s.id === currentAccount?.studentId) || null;
    }
    if (currentRole === 'parent') {
        return getSelectedParentChild();
    }
    return null;
}

function getLinkedStudentsForParent(parentAccount = currentAccount) {
    if (!parentAccount || parentAccount.role !== 'parent') return [];
    const parentProfile = parents.find((parent) => parent.id === parentAccount.id || normalizeEmail(parent.email) === normalizeEmail(parentAccount.email));
    const linkedIds = new Set([...(parentAccount.linkedStudentIds || []), ...(parentProfile?.linkedStudentIds || [])]);
    return students.filter((student) => linkedIds.has(student.id) || student.parentAccountId === parentProfile?.id || student.parentAccountId === parentAccount.id);
}

function getSelectedParentChild() {
    const linked = getLinkedStudentsForParent();
    if (!linked.length) return null;
    const savedId = localStorage.getItem('futureschoolSelectedChildId');
    const matched = linked.find((s) => s.id === savedId);
    if (matched) return matched;
    localStorage.setItem('futureschoolSelectedChildId', linked[0].id);
    return linked[0];
}

function getLoggedInTeacherProfile() {
      if (currentRole !== 'teacher' || !currentAccount?.teacherId) return null;
      return teachers.find((teacher) => teacher.id === currentAccount.teacherId) || null;
  }
  function isClassTeacherForClass(teacherId, classId) {
      return classes.some((schoolClass) => schoolClass.id === classId && schoolClass.active !== false && schoolClass.classTeacherId === teacherId);
  }
  function getClassTeacherForClass(classId) {
      const schoolClass = classes.find((item) => item.id === classId && item.active !== false);
      return schoolClass?.classTeacherId ? teachers.find((teacher) => teacher.id === schoolClass.classTeacherId && teacher.active !== false) || null : null;
  }
  function getClassTeacherClasses(teacherId) {
      return classes.filter((schoolClass) => schoolClass.active !== false && schoolClass.classTeacherId === teacherId);
  }
  function getClassesForClassTeacher(teacherId) { return getClassTeacherClasses(teacherId); }
  function getSubjectAllocationsForTeacher(teacherId, academicYearId = currentAcademicYear()?.id || defaultAcademicYearId) {
      return subjectAllocations.filter((allocation) => allocation.active !== false && allocation.teacherId === teacherId && allocation.academicYearId === academicYearId);
  }
  function getTeacherSubjectsForClass(teacherId, classId, academicYearId = currentAcademicYear()?.id || defaultAcademicYearId) {
      return [...new Set(getSubjectAllocationsForTeacher(teacherId, academicYearId).filter((allocation) => allocation.classId === classId).map((allocation) => allocation.subject))];
  }
  function teacherCanViewClass(classId, teacherId = currentAccount?.teacherId) {
      const tid = teacherId || currentAccount?.teacherId;
      if (!tid) return false;
      return isClassTeacherForClass(tid, classId) || getSubjectAllocationsForTeacher(tid).some((allocation) => allocation.classId === classId);
  }
  function teacherCanAccessClass(classId, teacherId = currentAccount?.teacherId) { return teacherCanViewClass(classId, teacherId); }
  function teacherCanManageSubject(classId, subject, teacherId = currentAccount?.teacherId) {
      const tid = teacherId || currentAccount?.teacherId;
      if (!tid) return false;
      return getTeacherSubjectsForClass(tid, classId).includes(subject);
  }
  function teacherCanAccessSubject(subject, teacherId = currentAccount?.teacherId) {
      const tid = teacherId || currentAccount?.teacherId;
      if (!tid) return false;
      return getSubjectAllocationsForTeacher(tid).some((allocation) => allocation.subject === subject);
  }
  function teacherHasClassTeacherResponsibility() {
      return Boolean(currentRole === 'teacher' && currentAccount?.teacherId && getClassTeacherClasses(currentAccount.teacherId).length);
  }
  function teacherHasSubjectResponsibility() {
      return Boolean(currentRole === 'teacher' && currentAccount?.teacherId && getSubjectAllocationsForTeacher(currentAccount.teacherId).length);
  }
  function isClassTeacher() { return teacherHasClassTeacherResponsibility(); }
  function isSubjectTeacher() { return teacherHasSubjectResponsibility(); }
  function getClassTeacher(classId) { return getClassTeacherForClass(classId); }
  function getTeacherClasses(teacherAccount = currentAccount) {
      if (!teacherAccount || teacherAccount.role !== 'teacher') return [];
      const teacherId = teacherAccount.teacherId;
      return classes.filter((schoolClass) => isClassTeacherForClass(teacherId, schoolClass.id) || getSubjectAllocationsForTeacher(teacherId).some((allocation) => allocation.classId === schoolClass.id));
  }
  function teacherOwnsQuiz(quiz) {
      if (!quiz) return false;
      if (currentRole === 'admin') return true;
      if (currentRole !== 'teacher' || quiz.ownershipStatus === 'Unassigned') return false;
      return quiz.teacherId === currentAccount?.teacherId || quiz.teacherAccountId === currentAccount?.id;
  }
function getStudentClassId(studentId) {
    const student = students.find((s) => s.id === studentId);
    return student ? student.classId : null;
}

function getStudentInvoices(studentId) {
    return feeInvoices.filter((inv) => inv.studentId === studentId);
}

function getPaymentTotal(payment) { return Number(payment?.totalAmount ?? payment?.amount ?? 0); }
function getPaymentInvoiceIds(payment) { return Array.isArray(payment?.allocations) ? payment.allocations.map((allocation) => allocation.invoiceId).filter(Boolean) : payment?.invoiceId ? [payment.invoiceId] : []; }

function getStudentNotifications(studentId, classId) {
    return notificationRecords.filter((n) => {
        if (n.studentId) {
            if (currentRole === 'admin') return true;
            if (currentRole === 'student') return n.studentId === studentId;
            if (currentRole === 'parent') return getLinkedStudentsForParent().some((student) => student.id === n.studentId);
            if (currentRole === 'teacher') {
                const s = students.find((item) => item.id === n.studentId);
                return (s && teacherCanAccessClass(s.classId)) || n.senderId === currentAccount?.id;
            }
            return n.senderId === currentAccount?.id;
        }

        if (n.classId) {
            if (currentRole === 'admin') return true;
            if (currentRole === 'student') return n.classId === classId;
            if (currentRole === 'parent') return getLinkedStudentsForParent().some((student) => student.classId === n.classId);
            if (currentRole === 'teacher') return teacherCanAccessClass(n.classId);
            return false;
        }

        if (n.audience === 'All') return true;
        if (currentRole === 'admin') return true;
        if (n.audience === 'Parents') return currentRole === 'parent';
        if (n.audience === 'Students') return currentRole === 'student';
        if (n.audience === 'Teachers') return currentRole === 'teacher';
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
    const email = normalizeEmail(document.getElementById('login-email').value);
    const password = document.getElementById('login-password').value;
    const loginMessage = document.getElementById('login-message');

    const account = accountRecords.find((rec) => rec.role === role && normalizeEmail(rec.email) === email && rec.password === password);

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

    if (role === 'teacher' && account && !account.teacherId) {
        const matchedTeacher = teachers.find((t) => normalizeEmail(t.email) === email);
        if (matchedTeacher) {
            account.teacherId = matchedTeacher.id;
        }
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
        const visibleItems = group.items.filter((item) => currentAccess.includes(item.page) && !(currentRole === 'teacher' && item.page === 'attendance' && !teacherHasClassTeacherResponsibility()) && !(currentRole === 'teacher' && item.page === 'reports' && !teacherHasClassTeacherResponsibility()));
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
    pages.forEach((page) => {
        page.classList.remove('active-page');
    });
    const targetPage = document.getElementById(`page-${pageName}`);
    if (!targetPage) {
        console.warn(`Page element not found for "${pageName}"`);
        return;
    }
    targetPage.classList.add('active-page');
    if (document.querySelectorAll('.page.active-page').length > 1) {
        console.warn('Multiple active pages found');
    }

    const navButtons = document.querySelectorAll('.side-nav button');
    navButtons.forEach((b) => b.classList.toggle('active', b.dataset.page === pageName));

    const activeBtn = document.querySelector(`.side-nav button[data-page="${pageName}"]`);
    if (activeBtn) {
        const label = activeBtn.querySelector('span')?.textContent || 'Workspace';
        document.getElementById('page-title').textContent = label;
    }

    refreshCurrentPageView(pageName);
    closeMobileSidebar();
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
        renderAcademicYears();
    } else if (currentRole === 'teacher') {
        renderTeacherDashboard();
        initTeacherAttendanceView();
        renderTeacherHomeworkList();
        loadTeacherMarksRoster();
        renderTeacherQuizzes();
        if (!quizBuilderInitialized) initializeQuizBuilder();
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
        populateAcademicYearSelector('student-report-academic-year');
        populateExamSelector('student-report-exam', true);
        renderStudentMarks();
        initStudentTutor();
        renderStudentQuizzes();
    }

    // Role-specific element visibility switches
    const isTeacher = currentRole === 'teacher';
    const isAdmin = currentRole === 'admin';
    const isParent = currentRole === 'parent';
    const isStudent = currentRole === 'student';

    // Dynamic Page Titles and Descriptions for Academic Views
    const marksHeading = document.getElementById('marks-heading');
    const marksDesc = document.getElementById('marks-description');
    const attHeading = document.getElementById('attendance-heading');
    const attDesc = document.getElementById('attendance-description');

    if (isStudent) {
        if (marksHeading) marksHeading.textContent = 'My Published Marks';
        if (marksDesc) marksDesc.textContent = 'View verified and published academic examination marks.';
        if (attHeading) attHeading.textContent = 'My Attendance';
        if (attDesc) attDesc.textContent = 'Track your daily classroom presence and attendance record history.';
    } else if (isParent) {
        if (marksHeading) marksHeading.textContent = 'Child Published Marks';
        if (marksDesc) marksDesc.textContent = 'View verified academic performance and examination marks.';
        if (attHeading) attHeading.textContent = 'Attendance';
        if (attDesc) attDesc.textContent = 'Record and track daily classroom presence.';
    } else {
        if (marksHeading) marksHeading.textContent = 'Marks entry & overview';
        if (marksDesc) marksDesc.textContent = 'Record grades, compute percentages accurately, and maintain academic assessment records.';
        if (attHeading) attHeading.textContent = 'Attendance';
        if (attDesc) attDesc.textContent = 'Record and track daily classroom presence.';
    }

    // Attendance View Switches
    const canTakeAttendance = isTeacher && teacherHasClassTeacherResponsibility();
    document.getElementById('teacher-attendance-view')?.classList.toggle('hidden', !canTakeAttendance);
    document.getElementById('admin-attendance-view')?.classList.toggle('hidden', !isAdmin);
    document.getElementById('teacher-self-attendance-panel')?.classList.toggle('hidden', !isTeacher);
    if (isTeacher) { const dateInput = document.getElementById('teacher-self-attendance-date'); if (dateInput) dateInput.value = todayISO; }
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
        if (activeStudent) {
            populateAcademicYearSelector('student-report-academic-year');
              populateExamSelector('student-report-exam', true);
            populateAcademicYearSelector('parent-report-academic-year');
              populateExamSelector('parent-report-exam', true);
            renderPortalReportCard();
        }
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
        if (currentRole === 'student') {
            const attHeading = document.getElementById('attendance-heading');
            if (attHeading) attHeading.textContent = 'My Attendance';
            const attDesc = document.getElementById('attendance-description');
            if (attDesc) attDesc.textContent = 'Track your daily classroom presence and attendance record history.';
            renderStudentAttendance();
        }
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
        if (currentRole === 'student') {
            const marksHeading = document.getElementById('marks-heading');
            if (marksHeading) marksHeading.textContent = 'My Published Marks';
            const marksDesc = document.getElementById('marks-description');
            if (marksDesc) marksDesc.textContent = 'View verified and published academic examination marks.';
            renderStudentMarks();
        }
        if (currentRole === 'parent') renderParentMarks();
    }
    if (pageName === 'reports') {
        if (currentRole === 'teacher' || currentRole === 'admin') {
            populateReportStudentSelect();
        }
        if (currentRole === 'student' || currentRole === 'parent') {
            const activeStudent = getCurrentStudent();
            if (activeStudent) renderPortalReportCard();
        }
    }
    if (pageName === 'fees') {
        if (currentRole === 'admin') renderAdminFeeLedger();
        if (currentRole === 'parent') renderParentFees();
    }
    if (pageName === 'notifications') {
        renderNotificationsList();
        populateNotificationAudienceSelectors();
    }
    if (pageName === 'lesson-planner' || pageName === 'question-paper') {
        populateClassDropdowns();
    }
    if (pageName === 'questions') {
        if (currentRole === 'teacher') { renderTeacherQuizzes(); if (!quizBuilderInitialized) initializeQuizBuilder(); }
        if (currentRole === 'student') renderStudentQuizzes();
    }
    if (pageName === 'library') filterLibrary();
    if (pageName === 'transport') renderTransportInfo();
    if (pageName === 'academic-years') renderAcademicYears();
    if (pageName === 'promotion') { populatePromotionSelectors(); renderPromotionHistory(); }
    if (pageName === 'certificates') { populateCertificateStudents(); renderCertificateHistory(); }
    if (pageName === 'staff-attendance') { renderStaffAttendance(); renderStaffAttendanceSummary(); }
    if (pageName === 'calendar') renderCalendar();
    if (pageName === 'exams') populateHallTicketStudents();
    if (pageName === 'messages') { populateMessageSelectors(); renderParentMessages(); }
    if (pageName === 'complaints') { populateComplaintChildren(); renderComplaints(); }
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
        renderPortalReportCard();
    }
}

function renderParentDashboard() {
    const child = getSelectedParentChild();
    if (!child) {
        const selector = document.getElementById('parent-child-selector-container');
        if (selector) selector.innerHTML = '<p class="form-message error">No child is linked to this Parent account. Contact School Administration.</p>';
        return;
    }

    document.getElementById('parent-child-name').textContent = child.name;
    document.getElementById('parent-child-class').textContent = `${child.className}-${child.section} · Roll No. ${child.roll}`;
    document.getElementById('parent-child-avatar').textContent = child.name.split(' ').map((n) => n[0]).join('').slice(0, 2);
    const classTeacher = getClassTeacher(child.classId);
    document.getElementById('parent-class-teacher-name').textContent = classTeacher ? classTeacher.name : 'Not assigned';
    document.getElementById('parent-class-teacher-email').textContent = classTeacher?.email || 'Email unavailable';

    // Today's attendance status
    const todayRec = attendanceRecords.find((rec) => rec.studentId === child.id && rec.date === todayISO);
    const todayStatusBadge = document.getElementById('parent-child-today-status');
    if (!todayRec) {
        todayStatusBadge.textContent = 'Attendance not marked';
        todayStatusBadge.className = 'status pending';
    } else {
          const labels = { 'Full Day': ['Full Day Present', 'present'], 'Half Day': ['Half Day', 'pending'], 'Absent': ['Absent today', 'absent'], 'Leave': ['On Leave', 'info'] };
          const [text, css] = labels[todayRec.dailyResult] || ['Attendance not marked', 'pending'];
          todayStatusBadge.textContent = text; todayStatusBadge.className = `status ${css}`;
      }
      const attendanceSummary = getStudentAttendanceSummary(child.id);
      document.getElementById('parent-child-attendance-pct').textContent = `${attendanceSummary.percentage}% (${attendanceSummary.attendedDayEquivalents}/${attendanceSummary.workingDays} day equivalents)`;

    // Fee balance
    const invoices = getStudentInvoices(child.id);
    const pendingTotal = invoices.filter((inv) => inv.status !== 'Paid' && !paymentRecords.some((p) => getPaymentInvoiceIds(p).includes(inv.invoiceId) && p.studentId === child.id)).reduce((sum, inv) => sum + Number(inv.amount), 0);
    const feeBadge = document.getElementById('parent-dashboard-fee-status');
    const feeText = document.getElementById('parent-dashboard-fee-text');
    if (!invoices.length) {
        feeBadge.textContent = 'No fee invoices';
        feeBadge.className = 'status info';
        feeText.textContent = 'No fee invoices.';
    } else if (pendingTotal > 0) {
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

    const publishedReports = marksRecords.some((mark) => mark.studentId === child.id && mark.status === 'Published');
    const reportBadge = document.getElementById('parent-dashboard-report-badge');
    const reportText = document.getElementById('parent-dashboard-report-text');
    if (!publishedReports) {
        reportBadge.textContent = 'Unavailable';
        reportBadge.className = 'status info';
        reportText.textContent = 'No report cards available.';
    } else {
        reportBadge.textContent = 'Available';
        reportBadge.className = 'status paid';
        reportText.textContent = 'Published school marks and evaluations';
    }

    const alerts = [];
    if (!todayRec) alerts.push(['Information', 'Attendance has not been marked today.']);
    if (todayRec?.dailyResult === 'Absent') alerts.push(['Urgent', `${child.name} was absent for both sessions today.`]);
    if (todayRec?.dailyResult === 'Half Day') alerts.push(['Attention', `${child.name} has a half-day attendance record today.`]);
    if (todayRec?.dailyResult === 'Leave') alerts.push(['Information', `Leave was recorded for ${child.name} today.`]);
    if (!classHw.length) alerts.push(['Information', 'No assigned homework.']);
    const pendingInvoices = invoices.filter((invoice) => invoice.status !== 'Paid' && !paymentRecords.some((payment) => payment.invoiceId === invoice.invoiceId && payment.studentId === child.id));
    if (pendingInvoices.some((invoice) => invoice.dueDate < todayISO)) alerts.push(['Urgent', 'A fee invoice is overdue.']);
    else if (pendingInvoices.length) alerts.push(['Attention', `${pendingInvoices.length} fee invoice${pendingInvoices.length === 1 ? '' : 's'} need attention.`]);
    const alertsContainer = document.getElementById('parent-dashboard-alerts');
    if (alertsContainer) alertsContainer.innerHTML = alerts.length ? alerts.map(([severity, text]) => `<div class="dashboard-alert ${severity.toLowerCase()}"><strong>${escapeHtml(severity)}</strong><span>${escapeHtml(text)}</span></div>`).join('') : '<p class="muted">No immediate follow-up needed.</p>';

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
    const safeStudents = Array.isArray(students) ? students : [];
    const safeTeachers = Array.isArray(teachers) ? teachers : [];
    const safeParents = Array.isArray(parents) ? parents : [];
    const safeClasses = Array.isArray(classes) ? classes : [];
    const safeAttendance = Array.isArray(attendanceRecords) ? attendanceRecords : [];
    const safePayments = Array.isArray(paymentRecords) ? paymentRecords : [];
    const safeInvoices = Array.isArray(feeInvoices) ? feeInvoices : [];
    const safeMarks = Array.isArray(marksRecords) ? marksRecords : [];
    const safeComplaints = Array.isArray(complaints) ? complaints : [];
    const safeNotifications = Array.isArray(notificationRecords) ? notificationRecords : [];
    const safeMeetings = Array.isArray(parentMeetings) ? parentMeetings : [];
    const activeClassesList = safeClasses.filter((schoolClass) => schoolClass && schoolClass.active);
    const setText = (id, value) => { const element = document.getElementById(id); if (element) element.textContent = value; };
    const renderSection = (name, callback) => { try { callback(); } catch (error) { console.error('Admin Dashboard section failed', { section: name, error }); } };
    const totalStudents = safeStudents.filter((student) => student && student.status === 'Active').length;
    const totalTeachers = safeTeachers.filter((teacher) => teacher && teacher.active).length;
    const totalParents = safeParents.filter((parent) => parent && parent.active).length;
    const totalClasses = safeClasses.filter((schoolClass) => schoolClass && schoolClass.active).length;
    const pendingAdmissions = safeStudents.filter((student) => student && student.status === 'Pending').length;

    // Zero-safe dashboard counts
    setText('admin-total-students', totalStudents); setText('admin-total-teachers', totalTeachers); setText('admin-total-parents', totalParents); setText('admin-total-classes', totalClasses); setText('admin-pending-admissions', pendingAdmissions);
    renderSection('overview cards', () => {
        const todayStaff = Array.isArray(staffAttendanceRecords) ? staffAttendanceRecords.filter((record) => record.date === todayISO) : [];
        setText('admin-teachers-present', todayStaff.filter((record) => record.status === 'Present').length); setText('admin-teachers-absent', todayStaff.filter((record) => record.status === 'Absent').length); setText('admin-teachers-leave', todayStaff.filter((record) => record.status === 'Leave').length); setText('admin-marks-awaiting', safeMarks.filter((mark) => mark.status === 'Submitted For Verification').length); setText('admin-open-complaints', safeComplaints.filter((complaint) => !['Resolved', 'Closed'].includes(complaint.status)).length); setText('admin-urgent-complaints', safeComplaints.filter((complaint) => complaint.priority === 'Urgent' && !['Resolved', 'Closed'].includes(complaint.status)).length); setText('admin-meetings-today', safeMeetings.filter((meeting) => meeting.preferredDate === todayISO).length);
        const overview = document.getElementById('admin-class-performance-overview');
        if (overview) overview.innerHTML = activeClassesList.map((schoolClass) => { const classStudents = safeStudents.filter((student) => student.classId === schoolClass.id && student.status === 'Active'); const classAttendance = safeAttendance.filter((record) => record.classId === schoolClass.id && record.date === todayISO); const publishedCount = safeMarks.filter((mark) => mark.classId === schoolClass.id && mark.status === 'Published').length; const classMarks = safeMarks.filter((mark) => mark.classId === schoolClass.id); const billed = safeInvoices.filter((invoice) => invoice.classId === schoolClass.id).reduce((sum, invoice) => sum + Number(invoice.amount || 0), 0); const collected = safePayments.filter((payment) => payment.allocations?.some((allocation) => safeInvoices.find((invoice) => invoice.invoiceId === allocation.invoiceId)?.classId === schoolClass.id)).reduce((sum, payment) => sum + Number(payment.totalAmount || payment.amount || 0), 0); const open = safeComplaints.filter((complaint) => getStudentClassId(complaint.studentId) === schoolClass.id && !['Resolved', 'Closed'].includes(complaint.status)).length; return `<div class="account-row"><div><b>${escapeHtml(schoolClass.name)}-${escapeHtml(schoolClass.section)}</b><small>Attendance: ${classAttendance.length && classStudents.length ? `${Math.round((classAttendance.filter((record) => record.dailyResult === 'Full Day').length / classStudents.length) * 100)}%` : 'No data'} · Published results: ${publishedCount}/${classMarks.length || 0} · Fees: ${billed ? `${Math.round((collected / billed) * 100)}%` : 'No data'} · Open complaints: ${open}</small></div></div>`; }).join('') || '<p class="muted">No class performance data available.</p>';
    });

    // Today's attendance calculation
    const todayRecords = safeAttendance.filter((record) => record.date === todayISO);
    const classesWithAttendance = new Set(todayRecords.map((r) => r.classId));
    const attendanceRate = todayRecords.length ? Math.round((todayRecords.filter((r) => (r.dailyResult || r.status) === 'Full Day').length / todayRecords.length) * 100) : 0;

    setText('admin-attendance-rate', `${attendanceRate}%`); setText('admin-attendance-status-label', `Submitted by ${classesWithAttendance.size} / ${activeClassesList.length} classes`);

    // Financial Totals
    const paidSum = safePayments.reduce((sum, p) => sum + getPaymentTotal(p), 0);
    const billedSum = safeInvoices.reduce((sum, inv) => sum + Number(inv.amount || 0), 0);
    const pendingSum = Math.max(0, billedSum - paidSum);

    setText('admin-fees-collected', `₹${paidSum.toLocaleString('en-IN')}`);
    setText('admin-fees-pending', `₹${pendingSum.toLocaleString('en-IN')}`);

    // Panel 1: Classes that have not submitted attendance today
    renderSection('attendance submission', () => { const unsubmittedClasses = activeClassesList.filter((schoolClass) => !classesWithAttendance.has(schoolClass.id)); const element = document.getElementById('admin-unsubmitted-attendance-list'); if (!element) return; element.innerHTML = unsubmittedClasses.length ? unsubmittedClasses.map((schoolClass) => `<div><b>${escapeHtml(schoolClass.name)} · Section ${escapeHtml(schoolClass.section)}</b><span>Class Teacher: ${escapeHtml(schoolClass.classTeacherName || schoolClass.teacherName || 'Unassigned')}</span></div>`).join('') : '<p class="muted">All active classes have submitted today\'s attendance.</p>'; });

    // Panel 2: Recent Payments
    const recentPaymentsEl = document.getElementById('admin-recent-payments-list');
    renderSection('recent payments', () => { const element = document.getElementById('admin-recent-payments-list'); if (!element) return; if (safePayments.length) { element.innerHTML = safePayments.slice(-3).reverse().map((p) => {
            const student = students.find((s) => s.id === p.studentId);
            return `<div><b>₹${getPaymentTotal(p).toLocaleString('en-IN')} via ${escapeHtml(p.paymentMethod)}</b><span>${student ? escapeHtml(student.name) : 'Student'} · ${new Date(p.paidAt).toLocaleDateString('en-GB')}</span></div>`;
        }).join(''); } else element.innerHTML = '<p class="muted">No payment transactions recorded yet.</p>'; });

    // Panel 3: Fee Defaulters Preview
    const defaultersEl = document.getElementById('admin-defaulters-preview');
    const overdueInvoices = feeInvoices.filter((inv) => inv.dueDate < todayISO && inv.status !== 'Paid' && !paymentRecords.some((p) => getPaymentInvoiceIds(p).includes(inv.invoiceId) && p.studentId === inv.studentId));
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
    const openComplaints = complaints.filter((complaint) => !['Resolved', 'Closed'].includes(complaint.status));
    const urgentComplaints = openComplaints.filter((complaint) => complaint.priority === 'Urgent');
    const complaintSummary = document.getElementById('admin-recent-notices-list');
    if (complaintSummary && (openComplaints.length || urgentComplaints.length)) complaintSummary.innerHTML += `<div><b>${openComplaints.length} open complaints</b><span>${urgentComplaints.length} urgent · <button class="text-button" type="button" onclick="showPage('complaints')">Review complaints</button></span></div>`;
}

document.getElementById('teacher-self-attendance-form')?.addEventListener('submit', (event) => { event.preventDefault(); const teacher = getLoggedInTeacherProfile(); const date = document.getElementById('teacher-self-attendance-date').value; if (!teacher || currentRole !== 'teacher') return; if (date !== todayISO) { showMessage('teacher-self-attendance-message', 'Teachers cannot backdate attendance. Ask Admin for a correction.', 'error'); return; } const existing = staffAttendanceRecords.find((record) => record.teacherId === teacher.id && record.date === date); const status = document.getElementById('teacher-self-attendance-status').value; const data = { id: existing?.id || createUniqueId('staff-attendance'), teacherId: teacher.id, date, status, markedByAccountId: currentAccount.id, submittedAt: new Date().toISOString(), correctedBy: existing?.correctedBy || null, correctionReason: existing?.correctionReason || '' }; if (existing) Object.assign(existing, data); else staffAttendanceRecords.push(data); saveStore('staffAttendance', staffAttendanceRecords); showMessage('teacher-self-attendance-message', 'Your attendance was submitted.'); renderAdminDashboard(); });

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
        const summary = getStudentAttendanceSummary(s.id);
        const attRate = summary.workingDays ? `${summary.percentage}% (${summary.attendedDayEquivalents}/${summary.workingDays})` : 'No data';

        const invoices = getStudentInvoices(s.id);
        const pendingFee = invoices.filter((inv) => inv.status !== 'Paid' && !paymentRecords.some((p) => getPaymentInvoiceIds(p).includes(inv.invoiceId) && p.studentId === s.id)).reduce((sum, inv) => sum + Number(inv.amount), 0);

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

    const attendanceSummary = getStudentAttendanceSummary(student.id);
    const attRate = attendanceSummary.percentage;

    const invoices = getStudentInvoices(student.id);
    const pendingTotal = invoices.filter((inv) => inv.status !== 'Paid' && !paymentRecords.some((p) => getPaymentInvoiceIds(p).includes(inv.invoiceId) && p.studentId === student.id)).reduce((sum, inv) => sum + Number(inv.amount), 0);

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
                ${student.exitRecord ? `<p><b>Exit date:</b> ${escapeHtml(student.exitRecord.effectiveDate)} · ${escapeHtml(student.exitRecord.reason)}</p><p><b>Destination:</b> ${escapeHtml(student.exitRecord.destinationSchool || 'Not provided')}</p>` : ''}
            </div>
            <div>
                <h4>Family & Financial Summary</h4>
                <p><b>Linked Parent:</b> ${escapeHtml(student.parentName)}</p>
                <p><b>Parent ID:</b> <code>${escapeHtml(student.parentAccountId)}</code></p>
                <p><b>Parent Mobile:</b> ${escapeHtml(student.parentMobile)}</p>
                <p><b>Parent Email:</b> ${escapeHtml(student.parentEmail)}</p>
                <p><b>Attendance Summary:</b> ${attRate}% (${attendanceSummary.fullDays} full, ${attendanceSummary.halfDays} half, ${attendanceSummary.absentDays} absent, ${attendanceSummary.leaveDays} leave)</p>
                <p><b>Fee Outstanding:</b> ₹${pendingTotal.toLocaleString('en-IN')}</p>
                <p><b>Transport Route:</b> ${escapeHtml(student.transportRouteId)}</p>
            </div>
        </div>
        <div style="margin-top:16px;">
            <h4>Student exit record</h4>
            <div class="form-grid"><label for="student-exit-status">Status<select id="student-exit-status"><option>Active</option><option>Inactive</option><option>Transferred</option><option>Completed</option><option>Dropped</option></select></label><label for="student-exit-date">Effective date<input id="student-exit-date" type="date"></label></div><label for="student-exit-reason">Reason<textarea id="student-exit-reason" rows="2"></textarea></label><label for="student-exit-destination">Destination school (optional)<input id="student-exit-destination"></label><button class="primary-button small" type="button" onclick="saveStudentExit('${student.id}')">Save exit status</button><button class="light-button small" type="button" onclick="printStudentIdCard('${student.id}')">Print ID Card</button>
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
    showMessage('settings-message', `Class updated to ${targetClass.name}-${targetClass.section} for ${student.name}.`);
}

function toggleStudentStatus(studentId) {
    const student = students.find((s) => s.id === studentId);
    if (!student || !window.confirm(`Toggle enrolment access for ${student.name}? Academic history remains archived.`)) return;
    student.status = student.status === 'Active' ? 'Inactive' : 'Active';
    saveStore('students', students);
    renderAdminStudentsTable();
    renderAdminDashboard();
}

function saveStudentExit(studentId) { const student = students.find((item) => item.id === studentId); const status = document.getElementById('student-exit-status').value; const effectiveDate = document.getElementById('student-exit-date').value; const reason = document.getElementById('student-exit-reason').value.trim(); if (!student || !effectiveDate || !reason) { showMessage('settings-message', 'Effective date and reason are required.', 'error'); return; } student.status = status; student.exitRecord = { effectiveDate, reason, destinationSchool: document.getElementById('student-exit-destination').value.trim() }; saveStore('students', students); renderAdminStudentsTable(); renderAdminDashboard(); viewStudentProfile(studentId); }
function printStudentIdCard(studentId) { const student = students.find((item) => item.id === studentId); if (!student) return; const route = transportRoutes.find((item) => item.id === student.transportRouteId); const card = `<div class="print-document"><h2>${escapeHtml(schoolSettings.name)}</h2><p>Prototype Student ID Card</p><div class="student-photo-placeholder">PHOTO</div><p><b>${escapeHtml(student.name)}</b></p><p>Admission: ${escapeHtml(student.admissionNumber)}</p><p>Class: ${escapeHtml(student.className)}-${escapeHtml(student.section)}</p><p>Academic Year: ${escapeHtml(currentAcademicYear()?.name || '')}</p><p>Parent contact: ${escapeHtml(student.parentMobile)}</p><p>Transport: ${escapeHtml(route?.routeName || 'Not assigned')}</p><p>Principal signature: ____________________</p></div>`; printStandaloneDocument('Student ID Card', card); }
function printStandaloneDocument(title, content) { const printWindow = window.open('', '_blank'); if (!printWindow) return; printWindow.document.write(`<html><head><title>${escapeHtml(title)}</title><style>body{font-family:sans-serif;padding:30px}.print-document{max-width:500px;border:2px solid #087f73;padding:24px}.student-photo-placeholder{width:90px;height:110px;border:1px dashed #71808c;display:grid;place-items:center}</style></head><body onload="window.print()">${content}</body></html>`); printWindow.document.close(); }

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
    const parentEmail = normalizeEmail(document.getElementById('admission-email').value);
    const parentName = document.getElementById('admission-parent').value.trim();
    const parentMobile = document.getElementById('admission-mobile').value.trim();
    let parentRec = getParentByEmail(parentEmail);

    if (!parentRec) {
        parentRec = {
            id: `account-parent-${Date.now()}`,
            name: parentName,
            email: parentEmail,
            phone: parentMobile,
            linkedStudentIds: [],
            active: true
        };
        parents.push(parentRec);
    }

    const parentLogin = accountRecords.find((account) => account.role === 'parent' && normalizeEmail(account.email) === parentEmail);
    if (parentLogin && parentLogin.id !== parentRec.id) {
        parentLogin.linkedStudentIds = [...new Set([...(parentLogin.linkedStudentIds || []), ...(parentRec.linkedStudentIds || [])])];
        parentRec.linkedStudentIds = parentLogin.linkedStudentIds;
    }

    const newStudent = {
        id: `s-${Date.now()}`,
        name: document.getElementById('admission-name').value.trim(),
        admissionNumber,
        dob: document.getElementById('admission-dob').value,
        classId: selectedClass.id,
        className: selectedClass.name,
        section: selectedClass.section,
        roll: document.getElementById('admission-roll').value,
        parentAccountId: parentRec.id,
        parentName: parentRec.name,
        parentMobile: parentRec.phone,
        parentEmail: parentRec.email,
        address: document.getElementById('admission-address').value.trim(),
        transportRouteId: 'route-12',
        status: document.getElementById('admission-status').value
    };

    students.push(newStudent);
    syncParentStudentRelationship(parentRec.id, newStudent.id);
    saveStore('students', students);
    saveStore('parents', parents);
    saveStore('futureschoolAccounts', accountRecords);

    const linkedParentLogin = accountRecords.find((account) => account.role === 'parent' && (account.id === parentRec.id || normalizeEmail(account.email) === parentEmail));
    document.getElementById('admission-message').textContent = linkedParentLogin
        ? 'Student admission recorded and linked to the existing parent login.'
        : 'Parent profile linked successfully. Create a portal login from User Accounts if parent access is required.';
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
        const classNames = getClassTeacherClasses(t.id).map((schoolClass) => `${schoolClass.name}-${schoolClass.section}`).join(', ') || 'None';

        return `<div class="account-row">
            <div>
                <b>${escapeHtml(t.name)}</b>
                <small>${escapeHtml(t.email)} · ${escapeHtml(t.phone)}</small>
                <small class="muted">Division: ${escapeHtml(t.teacherDivision || t.teacherType || 'Senior')} · Class Teacher: ${escapeHtml(getClassesForClassTeacher(t.id).map((item) => `${item.name}-${item.section}`).join(', ') || 'None')} · Subject allocations: ${escapeHtml(getSubjectAllocationsForTeacher(t.id).map((item) => `${item.subject} (${item.classId})`).join(', ') || 'None')}</small>
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
    const teacherDivision = document.getElementById('teacher-manage-type').value;
    let teacher = teachers.find((item) => item.id === id);
    if (teacher) {
        Object.assign(teacher, { name, email, phone, teacherType: teacherDivision, teacherDivision });
        subjectAllocations.forEach((allocation) => { if (allocation.teacherId === teacher.id) allocation.teacherName = name; });
        classes.forEach((schoolClass) => { if (schoolClass.classTeacherId === teacher.id) schoolClass.classTeacherName = name; });
        const account = accountRecords.find((item) => item.role === 'teacher' && item.teacherId === teacher.id);
        if (account) Object.assign(account, { name, email });
    } else {
        teacher = { id: `t-${Date.now()}`, name, email, phone, teacherType: teacherDivision, teacherDivision, active: true };
        teachers.push(teacher);
    }
    saveStore('teachers', teachers);
    saveStore('classes', classes);
    saveStore('subjectAllocations', subjectAllocations);
    saveStore('futureschoolAccounts', accountRecords);
    showMessage('teacher-manage-message', 'Teacher record saved successfully.');
    event.target.reset();
    document.getElementById('teacher-manage-id').value = '';
    document.getElementById('teacher-form-title').textContent = 'Add teacher';
    renderAdminTeachersList();
    renderAdminDashboard();
});
function editTeacher(teacherId) {
    const teacher = teachers.find((item) => item.id === teacherId);
    if (!teacher) return;
    document.getElementById('teacher-manage-id').value = teacher.id;
    document.getElementById('teacher-manage-name').value = teacher.name;
    document.getElementById('teacher-manage-email').value = teacher.email;
    document.getElementById('teacher-manage-phone').value = teacher.phone;
    document.getElementById('teacher-manage-type').value = teacher.teacherDivision || teacher.teacherType || 'Senior';
    document.getElementById('teacher-form-title').textContent = `Edit ${teacher.name}`;
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
        const linkedChildren = students.filter((s) => (p.linkedStudentIds || []).includes(s.id) || s.parentAccountId === p.id).map((s) => `${s.name} (${s.className}-${s.section})`).join(', ') || 'No linked children';

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
    const email = normalizeEmail(document.getElementById('parent-manage-email').value);
    const phone = document.getElementById('parent-manage-phone').value.trim();
    const childrenSelect = document.getElementById('parent-manage-children');
    const linkedStudentIds = Array.from(childrenSelect.selectedOptions).map((opt) => opt.value);

    if (id) {
        const parent = parents.find((p) => p.id === id);
        if (parent) {
            parent.name = name;
            parent.email = email;
            parent.phone = phone;
            assignStudentsToParent(parent.id, linkedStudentIds);
        }
    } else {
        if (getParentByEmail(email)) {
            document.getElementById('parent-manage-message').textContent = 'A parent with this email already exists. Link children from the existing parent record.';
            document.getElementById('parent-manage-message').className = 'form-message error';
            return;
        }
        const newParent = {
            id: `account-parent-${Date.now()}`,
            name,
            email,
            phone,
            linkedStudentIds: [],
            active: true
        };
        parents.push(newParent);
        assignStudentsToParent(newParent.id, linkedStudentIds);
    }

    saveStore('parents', parents);
    document.getElementById('parent-manage-message').textContent = 'Parent record saved successfully.';
    event.target.reset();
    document.getElementById('parent-manage-id').value = '';
    document.getElementById('parent-form-title').textContent = 'Add parent record';
    renderAdminParentsList();
    renderAdminDashboard();
});

function assignStudentsToParent(parentId, studentIds) {
    const parent = parents.find((item) => item.id === parentId);
    if (!parent) return false;
    const normalizedIds = [...new Set((studentIds || []).filter((studentId) => students.some((student) => student.id === studentId)))];
    parents.forEach((otherParent) => {
        otherParent.linkedStudentIds = (otherParent.linkedStudentIds || []).filter((studentId) => otherParent.id === parentId || !normalizedIds.includes(studentId));
    });
    parent.linkedStudentIds = normalizedIds;
    students.forEach((student) => {
        if (normalizedIds.includes(student.id)) {
            student.parentAccountId = parent.id;
            student.parentName = parent.name;
            student.parentEmail = parent.email;
            student.parentMobile = parent.phone;
        } else if (student.parentAccountId === parent.id) {
            student.parentAccountId = null;
        }
    });
    const account = accountRecords.find((item) => item.role === 'parent' && (item.id === parentId || normalizeEmail(item.email) === normalizeEmail(parent.email)));
    if (account) account.linkedStudentIds = [...normalizedIds];
    saveStore('parents', parents);
    saveStore('students', students);
    saveStore('futureschoolAccounts', accountRecords);
    return true;
}

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
                <small>${escapeHtml(acc.email)} · Temporary password configured</small>
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
    if (accountRecords.some((a) => normalizeEmail(a.email) === email)) {
        document.getElementById('account-message').textContent = 'An account with this email already exists.';
        document.getElementById('account-message').className = 'form-message error';
        return;
    }

    const role = document.getElementById('account-role').value;
    const name = document.getElementById('account-name').value.trim();
    const password = document.getElementById('account-password').value;
    const studentSelect = document.getElementById('account-student-select');
    const parentSelect = document.getElementById('account-parent-select');
    const teacherSelect = document.getElementById('account-teacher-select');
    const student = students.find((item) => item.id === studentSelect.value);
    const parent = parents.find((item) => item.id === parentSelect.value);
    const teacher = teachers.find((item) => item.id === teacherSelect.value);
    if (role === 'student' && !student) { document.getElementById('account-message').textContent = 'Select a Student profile before creating this login.'; document.getElementById('account-message').className = 'form-message error'; return; }
    if (role === 'parent' && !parent) { document.getElementById('account-message').textContent = 'Select a Parent profile before creating this login.'; document.getElementById('account-message').className = 'form-message error'; return; }
    if (role === 'teacher' && !teacher) { document.getElementById('account-message').textContent = 'Select a Teacher profile before creating this login.'; document.getElementById('account-message').className = 'form-message error'; return; }

    const newAccount = {
        id: `account-${Date.now()}`,
        name,
        email,
        password,
        role,
        studentId: role === 'student' ? student.id : null,
        linkedStudentIds: role === 'parent' ? [...(parent.linkedStudentIds || [])] : [],
        teacherId: role === 'teacher' ? teacher.id : null,
        active: true
    };

    accountRecords.push(newAccount);
    saveStore('futureschoolAccounts', accountRecords);
    document.getElementById('account-message').textContent = 'User account created and ready for login.';
    document.getElementById('account-message').className = 'form-message';
    event.target.reset();
    renderUserAccountsList();
});

function renderAccountRoleSpecificFields() {
    const role = document.getElementById('account-role')?.value;
    document.getElementById('account-student-field')?.classList.toggle('hidden', role !== 'student');
    document.getElementById('account-parent-field')?.classList.toggle('hidden', role !== 'parent');
    document.getElementById('account-teacher-field')?.classList.toggle('hidden', role !== 'teacher');
}

document.getElementById('account-role')?.addEventListener('change', renderAccountRoleSpecificFields);

document.getElementById('toggle-account-password')?.addEventListener('click', (event) => {
    const input = document.getElementById('account-password');
    const button = event.currentTarget;
    const showing = input.type === 'text';
    input.type = showing ? 'password' : 'text';
    button.textContent = showing ? 'Show password' : 'Hide password';
    button.setAttribute('aria-pressed', String(!showing));
});
document.getElementById('toggle-login-password')?.addEventListener('click', (event) => {
    const input = document.getElementById('login-password');
    const button = event.currentTarget;
    const showing = input.type === 'text';
    input.type = showing ? 'password' : 'text';
    button.textContent = showing ? 'Show password' : 'Hide password';
    button.setAttribute('aria-pressed', String(!showing));
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

function getSubjectsForClass(classId) {
    const schoolClass = classes.find((item) => item.id === classId);
    if (schoolClass?.schoolLevel === 'Pre Primary' || ['Nursery', 'LKG', 'UKG'].includes(schoolClass?.name)) return prePrimarySubjects;
    const match = Number(schoolClass?.gradeNumber || (schoolClass?.name || '').match(/\d+/)?.[0] || 10);
    return match <= 7 ? ['Telugu', 'Hindi', 'English', 'Maths', 'Science', 'Social'] : ['Telugu', 'Hindi', 'English', 'Maths', 'Physics', 'Biology', 'Social'];
}

function subjectsForClass(classId) { return getSubjectsForClass(classId); }
  function renderSubjectAllocationForm() {
    const yearSelect = document.getElementById('allocation-academic-year');
    const classSelect = document.getElementById('allocation-class');
    const classTeacherSelect = document.getElementById('allocation-class-teacher');
    const subjectSelect = document.getElementById('allocation-subject');
    const teacherSelect = document.getElementById('allocation-teacher');
    if (!classSelect || !subjectSelect || !teacherSelect) return;
    if (yearSelect) yearSelect.innerHTML = academicYears.map((year) => `<option value="${year.id}">${escapeHtml(year.name)}</option>`).join('');
    classSelect.innerHTML = classes.map((item) => `<option value="${item.id}">${escapeHtml(item.name)}-${escapeHtml(item.section)}</option>`).join('');
    if (classTeacherSelect) classTeacherSelect.innerHTML = '<option value="">Unassigned</option>' + teachers.filter((teacher) => teacher.active !== false).map((teacher) => `<option value="${teacher.id}">${escapeHtml(teacher.name)}</option>`).join('');
    subjectSelect.innerHTML = subjectsForClass(classSelect.value).map((subject) => `<option>${escapeHtml(subject)}</option>`).join('');
    teacherSelect.innerHTML = teachers.filter((teacher) => teacher.active).map((teacher) => `<option value="${teacher.id}">${escapeHtml(teacher.name)} · ${escapeHtml(teacher.teacherType || '')}</option>`).join('');
    renderSubjectAllocationList();
}

function renderSubjectAllocationList() {
    const list = document.getElementById('subject-allocation-list');
    if (!list) return;
    list.innerHTML = subjectAllocations.map((allocation) => { const schoolClass = classes.find((item) => item.id === allocation.classId); const teacher = teachers.find((item) => item.id === allocation.teacherId); return `<div class="account-row"><div><b>${escapeHtml(schoolClass ? `${schoolClass.name}-${schoolClass.section}` : allocation.classId)} · ${escapeHtml(allocation.subject)}</b><small>${escapeHtml(teacher?.name || 'Unassigned')}</small></div></div>`; }).join('') || '<p class="muted">No subject allocations configured.</p>';
}

document.getElementById('allocation-class')?.addEventListener('change', () => { const classId = document.getElementById('allocation-class').value; const select = document.getElementById('allocation-subject'); select.innerHTML = subjectsForClass(classId).map((subject) => `<option>${escapeHtml(subject)}</option>`).join(''); const schoolClass = classes.find((item) => item.id === classId); const classTeacher = document.getElementById('allocation-class-teacher'); if (classTeacher) classTeacher.value = schoolClass?.classTeacherId || ''; });
document.getElementById('subject-allocation-form')?.addEventListener('submit', (event) => { event.preventDefault(); const classId = document.getElementById('allocation-class').value; const subject = document.getElementById('allocation-subject').value; const teacherId = document.getElementById('allocation-teacher').value; const classTeacherId = document.getElementById('allocation-class-teacher').value; const teacher = teachers.find((item) => item.id === teacherId); const classTeacher = teachers.find((item) => item.id === classTeacherId); const academicYearId = document.getElementById('allocation-academic-year').value || currentAcademicYear()?.id || defaultAcademicYearId; const schoolClass = classes.find((item) => item.id === classId); if (schoolClass) { schoolClass.classTeacherId = classTeacherId || null; schoolClass.classTeacherName = classTeacher?.name || 'Unassigned'; schoolClass.teacherId = schoolClass.classTeacherId; schoolClass.teacherName = schoolClass.classTeacherName; } const existing = subjectAllocations.find((item) => item.academicYearId === academicYearId && item.classId === classId && item.subject === subject); if (existing) { existing.teacherId = teacherId; existing.teacherName = teacher?.name || 'Unassigned'; existing.updatedAt = new Date().toISOString(); } else subjectAllocations.push({ id: createUniqueId('allocation'), academicYearId, classId, subject, teacherId, teacherName: teacher?.name || 'Unassigned', active: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }); saveStore('classes', classes); saveStore('subjectAllocations', subjectAllocations); document.getElementById('allocation-message').textContent = 'Class teacher and subject allocation saved.'; document.getElementById('allocation-message').className = 'form-message'; renderSubjectAllocationList(); renderClassesList(); renderAdminDashboard(); });

document.getElementById('class-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('class-name').value.trim();
    const section = document.getElementById('class-section').value.trim().toUpperCase();
    const teacherSelect = document.getElementById('class-teacher');
    const teacher = teachers.find((t) => t.id === teacherSelect.value);
    const gradeNumber = Number(name.match(/\d+/)?.[0] || 0) || null;
    const schoolLevel = gradeNumber === null ? 'Pre Primary' : gradeNumber <= 7 ? 'Primary' : 'Senior';
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
        classTeacherId: teacher ? teacher.id : null,
        classTeacherName: teacher ? teacher.name : 'Unassigned',
        gradeNumber,
        schoolLevel,
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
    if (!classSelect || !dateInput || !teacherHasClassTeacherResponsibility()) return;

    const teacherClasses = getClassTeacherClasses(currentAccount?.teacherId);
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

    if (currentRole === 'teacher' && !isClassTeacherForClass(currentAccount.teacherId, classId)) {
        rosterTbody.innerHTML = '<tr><td colspan="3" class="muted">You do not have access to this class roster.</td></tr>';
        return;
    }

    const classStudents = students.filter((s) => s.classId === classId && s.status === 'Active');

    if (!classStudents.length) {
        rosterTbody.innerHTML = '<tr><td colspan="3" class="muted">No active students enrolled in this section.</td></tr>';
        return;
    }

    rosterTbody.innerHTML = classStudents.map((s) => {
        const existing = attendanceRecords.find((r) => r.studentId === s.id && r.date === date);
        const morningStatus = existing?.morningStatus || 'Present';
        const afternoonStatus = existing?.afternoonStatus || 'Present';

        return `<tr data-student-id="${s.id}">
            <td>${escapeHtml(s.roll)}</td>
            <td><b>${escapeHtml(s.name)}</b></td>
            <td><select class="attendance-morning-status" onchange="updateDailyAttendanceResult(this)"><option ${morningStatus === 'Present' ? 'selected' : ''}>Present</option><option ${morningStatus === 'Absent' ? 'selected' : ''}>Absent</option><option ${morningStatus === 'Leave' ? 'selected' : ''}>Leave</option></select></td>
            <td><select class="attendance-afternoon-status" onchange="updateDailyAttendanceResult(this)"><option ${afternoonStatus === 'Present' ? 'selected' : ''}>Present</option><option ${afternoonStatus === 'Absent' ? 'selected' : ''}>Absent</option><option ${afternoonStatus === 'Leave' ? 'selected' : ''}>Leave</option></select></td>
            <td><span class="attendance-daily-result">${calculateDailyAttendanceResult(morningStatus, afternoonStatus)}</span></td>
        </tr>`;
    }).join('');
}

// Section 6: Mark All Present behavior (ONLY updates .attendance-status dropdowns)
function markAllPresent() {
    document.querySelectorAll('#teacher-attendance-roster .attendance-morning-status, #teacher-attendance-roster .attendance-afternoon-status').forEach((select) => { select.value = 'Present'; });
    document.querySelectorAll('#teacher-attendance-roster tr[data-student-id]').forEach((row) => updateDailyAttendanceResult(row.querySelector('.attendance-morning-status')));
}
function markAllMorningPresent() { document.querySelectorAll('#teacher-attendance-roster .attendance-morning-status').forEach((select) => { select.value = 'Present'; updateDailyAttendanceResult(select); }); }
function markAllAfternoonPresent() { document.querySelectorAll('#teacher-attendance-roster .attendance-afternoon-status').forEach((select) => { select.value = 'Present'; updateDailyAttendanceResult(select); }); }
function updateDailyAttendanceResult(control) { const row = control.closest('tr'); const result = row.querySelector('.attendance-daily-result'); result.textContent = calculateDailyAttendanceResult(row.querySelector('.attendance-morning-status').value, row.querySelector('.attendance-afternoon-status').value); }

document.getElementById('attendance-date-input')?.addEventListener('change', renderTeacherAttendanceRoster);

document.getElementById('teacher-attendance-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const classSelect = document.getElementById('attendance-class-select');
    const classId = classSelect.value;

    if (currentRole === 'teacher' && !isClassTeacherForClass(currentAccount.teacherId, classId)) {
        showMessage('attendance-message', 'You are not authorized to save attendance for this class.', 'error');
        return;
    }

    const date = document.getElementById('attendance-date-input').value;
    const correctionReason = document.getElementById('attendance-correction-reason').value.trim();
    const rows = document.querySelectorAll('#teacher-attendance-roster tr[data-student-id]');

    const pendingChanges = [];
    let validationError = '';
    rows.forEach((row) => {
        const studentId = row.dataset.studentId;
        const morningStatus = row.querySelector('.attendance-morning-status').value;
        const afternoonStatus = row.querySelector('.attendance-afternoon-status').value;
        const dailyResult = calculateDailyAttendanceResult(morningStatus, afternoonStatus);
        const student = students.find((s) => s.id === studentId);
        const recordId = `${studentId}_${date}`;

        const existingIndex = attendanceRecords.findIndex((r) => r.id === recordId || (r.studentId === studentId && r.date === date));
        const existing = existingIndex >= 0 ? attendanceRecords[existingIndex] : null;
        const changed = Boolean(existing && (existing.morningStatus !== morningStatus || existing.afternoonStatus !== afternoonStatus));
        if (changed && !correctionReason) validationError = 'Correction reason is required when changing saved attendance.';
        pendingChanges.push({ row, studentId, morningStatus, afternoonStatus, dailyResult, student, recordId, existingIndex, existing, changed });
    });
    if (validationError) { showMessage('attendance-message', validationError, 'error'); return; }

    pendingChanges.forEach(({ studentId, morningStatus, afternoonStatus, dailyResult, student, recordId, existingIndex, existing, changed }) => {
        const recordData = {
            id: existing?.id || recordId,
            studentId,
            classId: classSelect.value,
            date,
            academicYearId: existing?.academicYearId || currentAcademicYear()?.id || defaultAcademicYearId,
            morningStatus,
            afternoonStatus,
            dailyResult,
            markedByTeacherId: currentAccount?.teacherId || null,
            markedByAccountId: currentAccount?.id || null,
            teacher: currentAccount ? currentAccount.name : 'Teacher',
            reason: correctionReason,
            correctionReason: changed ? correctionReason : existing?.correctionReason || '',
            correctedBy: changed ? currentAccount?.id || null : existing?.correctedBy || null,
            correctedAt: changed ? new Date().toISOString() : existing?.correctedAt || null,
            createdAt: existing?.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        if (existingIndex >= 0) {
            attendanceRecords[existingIndex] = recordData;
        } else {
            attendanceRecords.push(recordData);
        }

        if (student) {
            const alertType = dailyResult === 'Absent' ? 'Absence Alert' : dailyResult === 'Half Day' ? 'Half-Day Attendance' : dailyResult === 'Leave' ? 'Leave Recorded' : null;
            notificationRecords = notificationRecords.filter((n) => !(n.studentId === studentId && n.createdAt.startsWith(date) && ['Absence Alert', 'Half-Day Attendance', 'Leave Recorded', 'Attendance Alert'].includes(n.type)));
            if (alertType) notificationRecords.push({
                    id: `notif-${Date.now()}-${studentId}`,
                    senderId: currentAccount?.id || null,
                    senderRole: currentRole || 'teacher',
                    type: alertType,
                    audience: 'Parents',
                    studentId,
                    classId: classSelect.value,
                    title: `${alertType}: ${student.name}`,
                    message: dailyResult === 'Absent' ? `${student.name} was absent for both Morning and Afternoon sessions on ${date}.` : dailyResult === 'Half Day' ? `${student.name} was recorded as Half Day on ${date}. Morning: ${morningStatus}; Afternoon: ${afternoonStatus}.` : `Leave was recorded for ${student.name} on ${date}.`,
                    createdAt: new Date().toISOString(),
                    readByAccountIds: []
                });
        }
    });

    saveStore('attendance', attendanceRecords);
    saveStore('notifications', notificationRecords);

    const msg = document.getElementById('attendance-message');
    msg.textContent = 'Attendance saved successfully.';
    msg.className = 'form-message';

    renderAdminDashboard();
    renderTeacherDashboard();
    if (currentRole === 'parent') { renderParentDashboard(); renderParentHomework(); }
});

function renderAdminAttendanceReport() {
      const filterDateInput = document.getElementById('admin-attendance-filter-date');
      const container = document.getElementById('admin-attendance-report-container');
      if (!container) return;
      const date = filterDateInput?.value || todayISO;
      if (filterDateInput) filterDateInput.value = date;
      const rows = classes.filter((schoolClass) => schoolClass.active !== false).map((schoolClass) => {
          const roster = students.filter((student) => student.classId === schoolClass.id && student.status === 'Active');
          const records = attendanceRecords.filter((record) => record.classId === schoolClass.id && record.date === date);
          const full = records.filter((record) => record.dailyResult === 'Full Day').length;
          const half = records.filter((record) => record.dailyResult === 'Half Day').length;
          const absent = records.filter((record) => record.dailyResult === 'Absent').length;
          const leave = records.filter((record) => record.dailyResult === 'Leave').length;
          const attended = full + half * 0.5;
          const rate = roster.length ? Math.round((attended / roster.length) * 100) : 0;
          const morningSubmitted = records.length === roster.length && records.every((record) => record.morningStatus);
          const afternoonSubmitted = records.length === roster.length && records.every((record) => record.afternoonStatus);
          return `<tr><td><b>${escapeHtml(schoolClass.name)}-${escapeHtml(schoolClass.section)}</b></td><td>${escapeHtml(schoolClass.classTeacherName || 'Unassigned')}</td><td>${roster.length}</td><td>${morningSubmitted ? 'Yes' : 'Pending'}</td><td>${afternoonSubmitted ? 'Yes' : 'Pending'}</td><td>${full}</td><td>${half}</td><td>${absent}</td><td>${leave}</td><td>${rate}%</td><td><span class="status ${morningSubmitted && afternoonSubmitted ? 'paid' : 'pending'}">${morningSubmitted && afternoonSubmitted ? 'Submitted' : 'Pending'}</span></td></tr>`;
      }).join('');
      container.innerHTML = `<table><thead><tr><th>Class</th><th>Class Teacher</th><th>Enrolled</th><th>Morning</th><th>Afternoon</th><th>Full Day</th><th>Half Day</th><th>Absent</th><th>Leave</th><th>Attendance</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>`;
  }
function renderStudentAttendance() {
    const student = getCurrentStudent();
    if (!student) return;

    const records = attendanceRecords.filter((r) => r.studentId === student.id).sort((a, b) => b.date.localeCompare(a.date));
    const summary = getStudentAttendanceSummary(student.id, defaultAcademicYearId);
    const rate = summary.percentage;

    document.getElementById('student-att-rate').textContent = `${rate}%`;
    document.getElementById('student-att-days').textContent = `${summary.fullDays} full / ${summary.workingDays} working days`;
    document.getElementById('student-att-late').textContent = summary.halfDays;
    document.getElementById('student-att-absent').textContent = summary.absentDays;

    const tbody = document.querySelector('#student-attendance-table tbody');
    if (!tbody) return;
    document.getElementById('student-attendance-empty')?.classList.toggle('hidden', records.length > 0);

    tbody.innerHTML = records.map((r) => {
        const d = new Date(r.date + 'T00:00:00');
        return `<tr>
            <td>${escapeHtml(r.date)}</td>
            <td>${d.toLocaleDateString('en-GB', { weekday: 'long' })}</td>
            <td>${escapeHtml(r.morningStatus || '—')}</td><td>${escapeHtml(r.afternoonStatus || '—')}</td><td>${escapeHtml(r.dailyResult || '—')}</td>
            <td>${escapeHtml(r.teacher)}</td>
            <td>${escapeHtml(r.reason || '—')}</td>
        </tr>`;
    }).join('') || '<tr><td colspan="7" class="muted">No attendance history recorded yet.</td></tr>';
}

function renderParentAttendance() {
    const child = getSelectedParentChild();
    if (!child) return;

    const records = attendanceRecords.filter((r) => r.studentId === child.id).sort((a, b) => b.date.localeCompare(a.date));
    const summary = getStudentAttendanceSummary(child.id, defaultAcademicYearId);
    const rate = summary.percentage;

    document.getElementById('parent-att-rate').textContent = `${rate}%`;
    document.getElementById('parent-att-name').textContent = child.name;
    document.getElementById('parent-att-days').textContent = `${summary.fullDays} full / ${summary.workingDays} working`;
    document.getElementById('parent-att-late').textContent = `${summary.halfDays} half · ${summary.leaveDays} leave`;

    const todayRec = records.find((r) => r.date === todayISO);
    document.getElementById('parent-att-today-text').textContent = todayRec?.dailyResult || 'Attendance not marked';

    const tbody = document.querySelector('#parent-attendance-table tbody');
    if (!tbody) return;

    tbody.innerHTML = records.map((r) => {
        const d = new Date(r.date + 'T00:00:00');
        return `<tr>
            <td>${escapeHtml(r.date)}</td>
            <td>${d.toLocaleDateString('en-GB', { weekday: 'long' })}</td>
            <td>${escapeHtml(r.morningStatus || '—')}</td><td>${escapeHtml(r.afternoonStatus || '—')}</td><td>${escapeHtml(r.dailyResult || '—')}</td>
            <td>${escapeHtml(r.teacher || 'Class Teacher')}</td>
            <td>${escapeHtml(r.reason || '—')}</td>
        </tr>`;
    }).join('') || '<tr><td colspan="7" class="muted">No attendance logs available for this child.</td></tr>';
}

// Section 7: Homework Implementation
function renderTeacherHomeworkList() {
    const list = document.getElementById('teacher-homework-list');
    const filterSelect = document.getElementById('teacher-hw-class-filter');
    const classDropdown = document.getElementById('homework-class');
    if (!list) return;

    const teacherClasses = getClassTeacherClasses(currentAccount?.teacherId);

    if (filterSelect) {
        const currentVal = filterSelect.value;
        filterSelect.innerHTML = '<option value="all">All Assigned Classes</option>' + teacherClasses.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}-${escapeHtml(c.section)}</option>`).join('');
        if (currentVal && (currentVal === 'all' || teacherClasses.some((c) => c.id === currentVal))) {
            filterSelect.value = currentVal;
        }
    }

    if (classDropdown && currentRole === 'teacher') {
        const currentSelectedClass = classDropdown.value;
        classDropdown.innerHTML = teacherClasses.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}-${escapeHtml(c.section)}</option>`).join('');
        if (currentSelectedClass && teacherClasses.some((c) => c.id === currentSelectedClass)) {
            classDropdown.value = currentSelectedClass;
        }
    }

    const subjectDropdown = document.getElementById('homework-subject');
    if (subjectDropdown && currentRole === 'teacher') {
        const teacher = getLoggedInTeacherProfile();
        const allocatedSubjects = getTeacherSubjectsForClass(currentAccount?.teacherId, classDropdown?.value);
        if (allocatedSubjects.length) {
            const currentSub = subjectDropdown.value;
            subjectDropdown.innerHTML = allocatedSubjects.map((s) => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
            if (currentSub && allocatedSubjects.includes(currentSub)) {
                subjectDropdown.value = currentSub;
            }
        }
    }

    const selectedClassId = filterSelect?.value || 'all';
    const homework = homeworkRecords.filter((h) => {
        if (currentRole === 'teacher' && !teacherCanManageSubject(h.classId, h.subject)) return false;
        return selectedClassId === 'all' || h.classId === selectedClassId;
    });

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
    const subject = document.getElementById('homework-subject').value;

    if (currentRole === 'teacher' && (!teacherCanManageSubject(classId, subject))) {
        document.getElementById('homework-message').textContent = 'You are not authorized to create or edit homework for this class or subject.';
        document.getElementById('homework-message').className = 'form-message error';
        return;
    }

    const targetClass = classes.find((c) => c.id === classId);
    const title = document.getElementById('homework-title').value.trim();
    const instructions = document.getElementById('homework-instructions').value.trim();
    const dueDate = document.getElementById('homework-date').value;
    const status = document.getElementById('homework-status-select').value;
    const attachment = document.getElementById('homework-attachment-name').value.trim();
    if (!editId && dueDate < todayISO) {
        document.getElementById('homework-message').textContent = 'New homework due date cannot be before today.';
        document.getElementById('homework-message').className = 'form-message error';
        return;
    }

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
            academicYearId: currentAcademicYear()?.id,
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
    if (currentRole === 'parent') { renderParentDashboard(); renderParentHomework(); }
});

function editHomework(hwId) {
    const hw = homeworkRecords.find((h) => h.id === hwId);
    if (!hw) return;
    if (currentRole === 'teacher' && !teacherCanManageSubject(hw.classId, hw.subject)) {
        showMessage('homework-message', 'You are not authorized to edit homework for this class or subject.', 'error');
        return;
    }
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
    if (currentRole === 'teacher' && !teacherCanManageSubject(hw.classId, hw.subject)) {
        showMessage('homework-message', 'You are not authorized to modify homework for this class or subject.', 'error');
        return;
    }
    hw.status = hw.status === 'Closed' ? 'Published' : 'Closed';
    saveStore('homework', homeworkRecords);
    renderTeacherHomeworkList();
}

function deleteHomework(hwId) {
    const hw = homeworkRecords.find((h) => h.id === hwId);
    if (!hw) return;
    if (currentRole === 'teacher' && !teacherCanManageSubject(hw.classId, hw.subject)) {
        showMessage('homework-message', 'You are not authorized to delete homework for this class or subject.', 'error');
        return;
    }
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
    if (currentRole === 'teacher' && !teacherCanManageSubject(hw.classId, hw.subject)) {
        showMessage('homework-message', 'You are not authorized to give feedback on homework for this class or subject.', 'error');
        return;
    }
    const sub = hw.submissions.find((s) => s.studentId === studentId);
    if (sub) {
        sub.feedback = event.target.feedback.value.trim();
        sub.status = 'Reviewed';
        saveStore('homework', homeworkRecords);
        showMessage('homework-message', 'Feedback saved.');
        renderTeacherHomeworkList();
        renderTeacherDashboard();
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
        list.innerHTML = '<p class="muted">No assigned homework.</p>';
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

    const teacher = getLoggedInTeacherProfile();
    const teacherClasses = [...new Set(getSubjectAllocationsForTeacher(currentAccount?.teacherId).map((allocation) => allocation.classId))].map((classId) => classes.find((schoolClass) => schoolClass.id === classId)).filter(Boolean);

    // Ensure classSelect only contains assigned classes
    const currentClassId = classSelect.value;
    if (classSelect.options.length === 0 || !teacherCanAccessClass(currentClassId)) {
        classSelect.innerHTML = teacherClasses.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}-${escapeHtml(c.section)}</option>`).join('');
        if (teacherClasses.some((c) => c.id === currentClassId)) {
            classSelect.value = currentClassId;
        } else if (teacherClasses[0]) {
            classSelect.value = teacherClasses[0].id;
        }
    }

    // Ensure subjectSelect only contains assigned subjects
    if (subjectSelect) {
        const allocatedSubjects = getTeacherSubjectsForClass(currentAccount?.teacherId, classSelect.value);
        const currentSub = subjectSelect.value;
        if (subjectSelect.options.length === 0 || !teacherCanAccessSubject(currentSub)) {
            subjectSelect.innerHTML = allocatedSubjects.map((s) => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
            if (allocatedSubjects.includes(currentSub)) {
                subjectSelect.value = currentSub;
            } else if (allocatedSubjects[0]) {
                subjectSelect.value = allocatedSubjects[0];
            }
        }
    }

    const classId = classSelect.value;
    const subject = subjectSelect ? subjectSelect.value : '';
    const exam = examSelect ? examSelect.value : '';
    const maxMarks = Number(maxInput?.value || 100);

    if (!classId || !teacherCanManageSubject(classId, subject)) {
        tbody.innerHTML = '<tr><td colspan="5" class="muted">Access restricted: You can only view and enter marks for your assigned classes and subjects.</td></tr>';
        return;
    }

    const classStudents = students.filter((s) => s.classId === classId && teacherCanAccessClass(s.classId) && s.status === 'Active');

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
    const classId = document.getElementById('marks-class-select')?.value;
    const subject = document.getElementById('marks-subject-select')?.value;
    const exam = document.getElementById('marks-exam-select')?.value;
    const requestedStatus = mode === 'Submitted For Verification' ? 'Submitted For Verification' : mode === 'Published' ? 'Published' : mode === 'Verified' ? 'Verified' : 'Draft';
    if (currentRole === 'teacher' && requestedStatus === 'Published') {
        showMessage('marks-message', 'Only verified marks can be published by the Class Teacher.', 'error');
        return;
    }
    if (currentRole === 'teacher' && requestedStatus === 'Verified' && !isClassTeacherForClass(currentAccount?.teacherId, classId)) {
        showMessage('marks-message', 'Only the Class Teacher for this class can verify marks.', 'error');
        return;
    }
    const academicYearId = currentAcademicYear()?.id || defaultAcademicYearId;
    const maxMarks = Number(document.getElementById('marks-max-input').value || 100);
    const rows = document.querySelectorAll('#marks-roster-tbody tr[data-student-id]');
    const msg = document.getElementById('marks-message');

    if (currentRole === 'teacher' && (!teacherCanManageSubject(classId, subject))) {
        if (msg) {
            msg.textContent = 'Unauthorized: You can only enter marks for your assigned classes and subjects.';
            msg.className = 'form-message error';
        }
        return;
    }

    let hasErrors = false;
    rows.forEach((row) => {
        const input = row.querySelector('.mark-input');
        const scoreVal = input ? input.value.trim() : '';
        if (scoreVal === '' || Number(scoreVal) < 0 || Number(scoreVal) > maxMarks) {
            hasErrors = true;
        }
    });

    if (hasErrors) {
        if (msg) {
            msg.textContent = `Please enter valid marks from 0 to ${maxMarks} for all students.`;
            msg.className = 'form-message error';
        }
        return;
    }

    rows.forEach((row) => {
        const studentId = row.dataset.studentId;
        const student = students.find((s) => s.id === studentId);
        if (currentRole === 'teacher' && (!student || !teacherCanManageSubject(classId, subject))) return;

        const studentName = row.dataset.studentName;
        const score = Number(row.querySelector('.mark-input').value);
        const percentage = Math.round((score / maxMarks) * 100);
        const grade = calculateGrade(percentage);

        // Composite key: studentId_classId_subject_exam
        const markId = `m_${studentId}_${classId}_${subject}_${academicYearId}_${exam}`;
        const existingIdx = marksRecords.findIndex((m) => m.id === markId || (m.studentId === studentId && m.classId === classId && m.subject === subject && m.exam === exam && (m.academicYearId || defaultAcademicYearId) === academicYearId));
        const existingMark = existingIdx >= 0 ? marksRecords[existingIdx] : null;
        let amendments = existingMark?.amendments || [];
        if (isClassTeacher() && existingMark && Number(existingMark.score) !== score) {
            const amendmentReason = window.prompt('Enter the reason for correcting this mark:');
            if (!amendmentReason?.trim()) {
                showMessage('marks-message', 'A correction reason is required when changing a submitted mark.', 'error');
                return;
            }
            amendments = [...amendments, { originalScore: existingMark.score, amendedScore: score, amendedBy: currentAccount.teacherId, amendedAt: new Date().toISOString(), amendmentReason: amendmentReason.trim() }];
        }

        const markData = {
            id: markId,
            academicYearId,
                studentId,
            studentName,
            classId,
            subject,
            exam,
            maximumMarks: maxMarks,
            score,
            percentage,
            grade,
            status: requestedStatus,
            enteredByTeacherId: currentRole === 'teacher' ? currentAccount.teacherId : null,
            submittedAt: requestedStatus === 'Submitted For Verification' ? new Date().toISOString() : existingIdx >= 0 ? marksRecords[existingIdx].submittedAt : null,
            amendments,
            savedAt: new Date().toISOString()
        };

        if (existingIdx >= 0) {
            marksRecords[existingIdx] = markData;
        } else {
            marksRecords.push(markData);
        }
    });

    saveStore('marks', marksRecords);

    if (msg) {
        msg.textContent = `Marks for ${subject} (${exam}) successfully saved as ${mode}.`;
        msg.className = 'form-message';
    }

    renderAdminDashboard();
    renderTeacherDashboard();
}


function publishVerifiedMarksFromRoster() {
    const classId = document.getElementById('marks-class-select')?.value;
    const subject = document.getElementById('marks-subject-select')?.value;
    const exam = document.getElementById('marks-exam-select')?.value;
    const msg = document.getElementById('marks-message');
    if (!classId || !subject || !exam) return;

    if (currentRole === 'teacher' && !isClassTeacherForClass(currentAccount?.teacherId, classId)) {
        showMessage('marks-message', 'Only the Class Teacher for this class can publish verified marks.', 'error');
        return;
    }

    const academicYearId = currentAcademicYear()?.id || defaultAcademicYearId;
    const records = marksRecords.filter((m) =>
        m.classId === classId &&
        m.subject === subject &&
        m.exam === exam &&
        (m.academicYearId || defaultAcademicYearId) === academicYearId
    );

    if (!records.length) {
        showMessage('marks-message', 'No saved marks records found to publish. Please save marks first.', 'error');
        return;
    }

    records.forEach((record) => {
        record.status = 'Published';
        record.verifiedBy = currentAccount?.teacherId || currentAccount?.id;
        record.verifiedAt = new Date().toISOString();
    });

    saveStore('marksRecords', marksRecords);
    showMessage('marks-message', `Marks for ${subject} (${exam}) have been published successfully.`);
    if (typeof renderMarksRoster === 'function') {
        renderMarksRoster();
    }
    if (typeof renderAdminMarksTable === 'function') {
        renderAdminMarksTable();
    }
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

    const yearSelect = document.getElementById('student-report-academic-year');
    if (yearSelect && yearSelect.options.length === 0) {
        populateAcademicYearSelector('student-report-academic-year');
    }
    const examSelect = document.getElementById('student-report-exam');
    if (examSelect && examSelect.options.length <= 1) {
        populateExamSelector('student-report-exam', true);
    }

    // Student can ONLY view Published marks
    const academicYearId = document.getElementById('student-report-academic-year')?.value || defaultAcademicYearId;
    const exam = document.getElementById('student-report-exam')?.value || 'All Exams';
    const publishedMarks = marksRecords.filter((m) => m.studentId === student.id && m.status === 'Published' && (m.academicYearId || defaultAcademicYearId) === academicYearId && (exam === 'All Exams' || m.exam === exam));

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

    document.getElementById('parent-marks-title').textContent = `${child.name} · Published school marks`;

    // Parent can ONLY view Published marks
    const academicYearId = document.getElementById('parent-report-academic-year')?.value || defaultAcademicYearId;
    const exam = document.getElementById('parent-report-exam')?.value || 'All Exams';
    const publishedMarks = marksRecords.filter((m) => m.studentId === child.id && m.status === 'Published' && (m.academicYearId || defaultAcademicYearId) === academicYearId && (exam === 'All Exams' || m.exam === exam));

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

document.getElementById('student-report-academic-year')?.addEventListener('change', renderPortalReportCard);
document.getElementById('student-report-exam')?.addEventListener('change', renderPortalReportCard);
document.getElementById('parent-report-academic-year')?.addEventListener('change', renderPortalReportCard);
document.getElementById('parent-report-exam')?.addEventListener('change', renderPortalReportCard);
document.getElementById('student-report-academic-year')?.addEventListener('change', renderStudentMarks);
document.getElementById('student-report-exam')?.addEventListener('change', renderStudentMarks);
document.getElementById('parent-report-academic-year')?.addEventListener('change', renderParentMarks);
document.getElementById('parent-report-exam')?.addEventListener('change', renderParentMarks);

function renderPortalReportCard() {
    const student = getCurrentStudent();
    if (!student) return;
    const prefix = currentRole === 'student' ? 'student' : 'parent';
    const yearId = document.getElementById(`${prefix}-report-academic-year`)?.value || defaultAcademicYearId;
    const exam = document.getElementById(`${prefix}-report-exam`)?.value || 'All Exams';
    const container = document.getElementById('report-reader');
    if (container) renderOfficialReportCard(container, student.id, yearId, 'Annual', exam, '');
}

function renderPrototypeReportCard(container, studentId, academicYearId, exam, teacherComment = '') {
    renderOfficialReportCard(container, studentId, academicYearId, 'Annual', exam, teacherComment);
}






// Section 9: Report Cards Implementation
function getReportCardKey(studentId, academicYearId, exam) {
    return `rc_${studentId}_${academicYearId}_${exam}`;
}

function getReportCardMarks(studentId, classId, academicYearId = defaultAcademicYearId, exam = 'All Exams') {
    return marksRecords.filter((m) =>
        m.studentId === studentId &&
        (m.academicYearId || defaultAcademicYearId) === academicYearId &&
        (exam === 'All Exams' || m.exam === exam)
    );
}

function getReportCardSubjectsMissing(student, academicYearId = defaultAcademicYearId, exam = 'All Exams') {
    if (!student) return [];
    const requiredSubjects = getSubjectsForClass(student.classId);
    const publishedMarks = marksRecords.filter((m) =>
        m.studentId === student.id &&
        m.status === 'Published' &&
        (m.academicYearId || defaultAcademicYearId) === academicYearId &&
        (exam === 'All Exams' || m.exam === exam)
    );
    const publishedSubjects = new Set(publishedMarks.map((m) => m.subject));
    return requiredSubjects.filter((sub) => !publishedSubjects.has(sub));
}

function canPublishReportCard(student) {
    if (!student) return false;
    if (currentRole === 'admin') return true;
    if (currentRole === 'teacher') {
        return isClassTeacherForClass(currentAccount?.teacherId, student.classId);
    }
    return false;
}

function renderOfficialReportCard(container, studentId, academicYearId = defaultAcademicYearId, term = 'Annual', exam = 'All Exams', teacherCommentOverride = '') {
    const student = students.find((s) => s.id === studentId) || students[0];
    if (!student || !container) return;

    if (currentRole === 'teacher' && !isClassTeacherForClass(currentAccount?.teacherId, student.classId)) {
        container.innerHTML = '<div class="report-preview-empty"><p class="muted">Access denied: Only the designated Class Teacher can generate or view official report cards for this class.</p></div>';
        return;
    }

    let published = marksRecords.filter((m) => m.studentId === student.id && m.status === 'Published');
    if (academicYearId && academicYearId !== 'all') {
        published = published.filter((m) => (m.academicYearId || defaultAcademicYearId) === academicYearId);
    }
    if (exam && exam !== 'All Exams' && exam !== 'All Examinations In Term') {
        published = published.filter((m) => m.exam === exam);
    }

    const attSummary = getStudentAttendanceSummary(student.id, academicYearId);
    const attRate = attSummary.percentage;
    const attended = attSummary.attendedDayEquivalents;
    const totalWorking = attSummary.workingDays;

    const totalScore = published.reduce((sum, m) => sum + Number(m.score || 0), 0);
    const totalMax = published.reduce((sum, m) => sum + Number(m.maximumMarks || 0), 0);
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
                <div class="brand-mark">${escapeHtml(schoolSettings.initials || 'FS')}</div>
                <div>
                    <h2>${escapeHtml(schoolSettings.name || 'FutureSchool')}</h2>
                    <small class="muted">${escapeHtml(schoolSettings.tagline || 'Excellence in Education')}</small>
                </div>
            </div>
            <div style="text-align:right;">
                <span class="status paid">Official Report Card</span><br>
                <small class="muted">Academic Year: ${escapeHtml(academicYearId)} · Term: ${escapeHtml(term)}</small>
            </div>
        </div>

        <div class="report-meta-grid">
            <p><b>Student Name:</b> ${escapeHtml(student.name)}</p>
            <p><b>Admission Number:</b> <code>${escapeHtml(student.admissionNumber)}</code></p>
            <p><b>Class & Section:</b> ${escapeHtml(student.className)}-${escapeHtml(student.section)}</p>
            <p><b>Roll Number:</b> ${escapeHtml(student.roll)}</p>
            <p><b>Attendance:</b> ${attRate}% (${attended} of ${totalWorking} sessions attended)</p>
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
                <p><b>Principal:</b> ${escapeHtml(schoolSettings.principal || 'Principal')}</p>
                <small class="muted">Verified Academic Document</small>
            </div>
        </div>

        <div class="report-actions">
            <button class="primary-button small" type="button" onclick="window.print()">Print / Save as PDF</button>
            <button class="light-button small" type="button" onclick="goHome(event)">Back to Dashboard</button>
        </div>
    `;
}

function populateReportStudentSelect() {
    const select = document.getElementById('report-student');
    if (!select) return;

    let availableStudents = students.filter((s) => s.status === 'Active');
    if (currentRole === 'teacher') {
        availableStudents = availableStudents.filter((s) => isClassTeacherForClass(currentAccount?.teacherId, s.classId));
    }

    select.innerHTML = availableStudents.map((s) => `<option value="${s.id}">${escapeHtml(s.name)} (${escapeHtml(s.className)}-${escapeHtml(s.section)})</option>`).join('');
    populateAcademicYearSelector('report-academic-year');
    populateExamSelector('report-exam', false);
}

document.getElementById('report-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (currentRole === 'teacher' && !teacherHasClassTeacherResponsibility()) {
        showMessage('reports-description', 'Only the Class Teacher can generate or publish report cards.', 'error');
        return;
    }
    const studentId = document.getElementById('report-student').value;
    const academicYearId = document.getElementById('report-academic-year').value;
    const exam = document.getElementById('report-exam').value;
    const academicRemark = document.getElementById('report-academic-remark').value.trim();
    const conductRemark = document.getElementById('report-conduct-remark').value.trim();
    const conduct = document.getElementById('report-conduct').value;
    const container = document.getElementById('report-preview');
    const student = students.find((s) => s.id === studentId);
    if (currentRole === 'teacher' && (!student || !isClassTeacherForClass(currentAccount?.teacherId, student.classId))) {
        if (container) {
            container.innerHTML = '<div class="report-preview-empty"><p class="muted">Access denied: Only the designated Class Teacher can generate report cards for this class.</p></div>';
        }
        return;
    }
    renderPrototypeReportCard(container, studentId, academicYearId, exam, academicRemark);
    renderReportCardWorkflow(container, student, academicYearId, exam, academicRemark, conductRemark, conduct);
});

function renderReportCardWorkflow(container, student, academicYearId, exam, academicRemark, conductRemark, conduct) {
    if (!container || !student) return;
    const missing = getReportCardSubjectsMissing(student, academicYearId, exam);
    const key = getReportCardKey(student.id, academicYearId, exam);
    let card = reportCards.find((item) => item.id === key);
    const status = missing.length ? 'In Preparation' : (card?.status || 'Ready For Class Teacher Review');
    if (!card) {
        card = {
            id: key,
            studentId: student.id,
            classId: student.classId,
            academicYearId,
            exam,
            status,
            conduct,
            academicRemark,
            conductRemark,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        reportCards.push(card);
    }
    const controls = document.createElement('div');
    controls.className = 'report-workflow-panel';
    controls.innerHTML = `<p><b>Report status:</b> ${escapeHtml(status)}</p>${missing.length ? `<p class="form-message error">Missing published subjects: ${escapeHtml(missing.join(', '))}</p>` : '<p class="muted">All configured subjects are published.</p>'}<p><b>Pass policy:</b> ${Number(schoolSettings.passPercentage || 35)}% per required subject.</p>${canPublishReportCard(student) && !missing.length ? `<button class="primary-button small" type="button" onclick="publishReportCard('${card.id}')">Publish Report Card</button>` : ''}`;
    container.appendChild(controls);
    saveStore('reportCards', reportCards);
}

function publishReportCard(reportId) {
    const card = reportCards.find((item) => item.id === reportId);
    const student = students.find((item) => item.id === card?.studentId);
    if (!card || !student || !canPublishReportCard(student)) return;
    const missing = getReportCardSubjectsMissing(student, card.academicYearId, card.exam);
    if (missing.length) {
        showMessage('reports-description', `Missing published subjects: ${missing.join(', ')}`, 'error');
        return;
    }
    const marks = getReportCardMarks(student.id, student.classId, card.academicYearId, card.exam);
    const threshold = Number(schoolSettings.passPercentage || 35);
    card.pass = marks.every((mark) => Number(mark.percentage) >= threshold);
    card.status = 'Published';
    card.publishedBy = currentAccount?.teacherId || currentAccount?.id;
    card.publishedAt = new Date().toISOString();
    card.updatedAt = new Date().toISOString();
    saveStore('reportCards', reportCards);
    showMessage('reports-description', 'Report card published.');
    renderPrototypeReportCard(document.getElementById('report-preview'), student.id, card.academicYearId, card.exam, '');
}

function populateAcademicYearSelector(yearSelectId) {
    const select = document.getElementById(yearSelectId);
    if (!select) return;
    const currentYearId = currentAcademicYear()?.id || defaultAcademicYearId;
    select.innerHTML = academicYears.map((year) => `<option value="${year.id}" ${year.id === currentYearId ? 'selected' : ''}>${escapeHtml(year.name)}</option>`).join('');
}

function populateExamSelector(examSelectId, includeAllExams = false) {
    const select = document.getElementById(examSelectId);
    if (!select) return;
    const exams = ['Unit 1','Unit 2','Quarterly','Unit 3','Unit 4','Half Yearly','Pre Final','Final'];
    select.innerHTML = (includeAllExams ? '<option>All Exams</option>' : '') + exams.map((exam) => `<option value="${exam}">${exam}</option>`).join('');
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




function getParentCommunicationTeachers(child) {
    if (!child) return [];
    const classObj = classes.find((c) => c.id === child.classId);
    const teacherIds = new Set();
    if (classObj?.classTeacherId) {
        teacherIds.add(classObj.classTeacherId);
    }
    subjectAllocations
        .filter((a) => a.classId === child.classId && a.active !== false)
        .forEach((a) => teacherIds.add(a.teacherId));

    return Array.from(teacherIds)
        .map((id) => teachers.find((t) => t.id === id && t.active !== false))
        .filter(Boolean);
}

function populateMessageSelectors() {
    const childSelect = document.getElementById('message-child');
    const teacherSelect = document.getElementById('message-teacher');
    if (currentRole === 'parent') {
        const linked = getLinkedStudentsForParent();
        if (childSelect) childSelect.innerHTML = linked.map((student) => `<option value="${student.id}">${escapeHtml(student.name)}</option>`).join('');
        const child = getSelectedParentChild();
        if (childSelect && child) childSelect.value = child.id;
        const assigned = getParentCommunicationTeachers(child);
        if (teacherSelect) teacherSelect.innerHTML = assigned.map((teacher) => `<option value="${teacher.id}">${escapeHtml(teacher.name)}</option>`).join('');
    } else if (currentRole === 'teacher') {
        const teacher = getLoggedInTeacherProfile();
        const teacherClasses = getTeacherClasses();
        const teacherClassIds = teacherClasses.map((c) => c.id);
        const teacherStudents = students.filter((student) => teacherClassIds.includes(student.classId) && student.status === 'Active');
        if (childSelect) {
            childSelect.innerHTML = teacherStudents.map((student) => `<option value="${student.id}">${escapeHtml(student.name)} (${escapeHtml(student.className)}-${escapeHtml(student.section)})</option>`).join('');
        }
        if (teacherSelect) {
            teacherSelect.innerHTML = `<option value="${teacher?.id || currentAccount?.teacherId}">${escapeHtml(teacher?.name || currentAccount?.name || 'Teacher')}</option>`;
        }
    }
}

document.getElementById('parent-message-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const studentId = document.getElementById('message-child').value;
    const teacherId = document.getElementById('message-teacher').value;
    const student = students.find((item) => item.id === studentId);
    if (!student || !teacherId) return;

    if (currentRole === 'teacher' && !teacherCanAccessClass(student.classId)) {
        const statusEl = document.getElementById('parent-message-status');
        if (statusEl) {
            statusEl.textContent = 'Access restricted: You cannot message parents of students in unassigned classes.';
            statusEl.className = 'form-message error';
        }
        return;
    }

    const message = {
        id: createUniqueId('conversation'),
        studentId,
        parentAccountId: currentRole === 'parent' ? currentAccount.id : student.parentAccountId,
        teacherId,
        subject: document.getElementById('message-subject').value.trim(),
        messages: [{
            id: createUniqueId('message-entry'),
            senderRole: currentRole,
            senderId: currentAccount.id,
            text: document.getElementById('message-text').value.trim(),
            sentAt: new Date().toISOString(),
            readByAccountIds: [currentAccount.id]
        }],
        status: currentRole === 'parent' ? 'Awaiting Teacher' : 'Awaiting Parent',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    parentMessages.unshift(message);
    saveStore('parentMessages', parentMessages);
    document.getElementById('parent-message-status').textContent = 'Message saved to the conversation.';
    document.getElementById('parent-message-status').className = 'form-message';
    event.target.reset();
    renderParentMessages();
});

function renderParentMessages() {
    const list = document.getElementById('parent-message-list');
    if (!list) return;
    const teacher = getLoggedInTeacherProfile();
    const visible = currentRole === 'parent'
        ? parentMessages.filter((item) => item.parentAccountId === currentAccount?.id)
        : (currentRole === 'teacher'
            ? parentMessages.filter((item) => {
                const sClassId = getStudentClassId(item.studentId);
                const isAssigned = teacherCanAccessClass(sClassId);
                const isTeacher = !item.teacherId || item.teacherId === (teacher?.id || currentAccount?.teacherId);
                return isAssigned && isTeacher;
            })
            : parentMessages);

    list.innerHTML = visible.map((item) => {
        const unread = item.messages.filter((message) => message.senderId !== currentAccount?.id && !(message.readByAccountIds || []).includes(currentAccount?.id)).length;
        return `<div class="account-row"><div><b>${escapeHtml(item.subject)}</b><small>${escapeHtml(students.find((student) => student.id === item.studentId)?.name || 'Student')} · ${escapeHtml(item.status)}${unread ? ` · ${unread} unread` : ''}</small><p>${escapeHtml(item.messages[item.messages.length - 1]?.text || '')}</p></div><button class="text-button" type="button" onclick="openMessageThread('${item.id}')">Open</button></div>`;
    }).join('') || '<p class="muted">No parent messages.</p>';
}

function getVisibleComplaints() { if (currentRole === 'parent') return complaints.filter((complaint) => complaint.parentAccountId === currentAccount?.id); if (currentRole === 'teacher') return complaints.filter((complaint) => complaint.assignedTeacherId === currentAccount?.teacherId || isClassTeacherForClass(currentAccount?.teacherId, getStudentClassId(complaint.studentId))); if (currentRole === 'admin') return complaints; return []; }
function populateComplaintChildren() { const select = document.getElementById('complaint-child'); if (!select || currentRole !== 'parent') return; select.innerHTML = getLinkedStudentsForParent().map((student) => `<option value="${student.id}">${escapeHtml(student.name)} (${escapeHtml(student.className)}-${escapeHtml(student.section)})</option>`).join(''); }
function renderComplaints() { const list = document.getElementById('complaint-list'); if (!list) return; const filter = document.getElementById('complaint-status-filter')?.value || 'all'; const visible = getVisibleComplaints().filter((complaint) => filter === 'all' || complaint.status === filter); list.innerHTML = visible.map((complaint) => { const student = students.find((item) => item.id === complaint.studentId); const unread = complaint.replies.filter((reply) => reply.senderId !== currentAccount?.id && !(reply.readByAccountIds || []).includes(currentAccount?.id)).length; return `<div class="account-row"><div><b>${escapeHtml(complaint.category)} · ${escapeHtml(complaint.priority)}</b><small>${escapeHtml(student?.name || 'Student')} · ${escapeHtml(complaint.status)}${unread ? ` · ${unread} unread` : ''}</small><p>${escapeHtml(complaint.description)}</p></div><button class="text-button" type="button" onclick="openComplaintThread('${complaint.id}')">Open</button></div>`; }).join('') || '<p class="muted">No complaints found.</p>'; }
document.getElementById('complaint-form')?.addEventListener('submit', (event) => { event.preventDefault(); const studentId = document.getElementById('complaint-child').value; const student = students.find((item) => item.id === studentId); if (!student || currentRole !== 'parent') return; complaints.unshift({ id: createUniqueId('complaint'), studentId, parentAccountId: currentAccount.id, category: document.getElementById('complaint-category').value, priority: document.getElementById('complaint-priority').value, description: document.getElementById('complaint-description').value.trim(), status: 'Open', assignedTeacherId: null, replies: [], internalNotes: [], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }); saveStore('complaints', complaints); showMessage('complaint-message', 'Complaint raised successfully.'); event.target.reset(); renderComplaints(); });
function openComplaintThread(complaintId) { const complaint = complaints.find((item) => item.id === complaintId); if (!complaint || !getVisibleComplaints().some((item) => item.id === complaintId)) return; complaint.replies.forEach((reply) => { reply.readByAccountIds = Array.isArray(reply.readByAccountIds) ? reply.readByAccountIds : []; if (!reply.readByAccountIds.includes(currentAccount.id)) reply.readByAccountIds.push(currentAccount.id); }); saveStore('complaints', complaints); const student = students.find((item) => item.id === complaint.studentId); const panel = document.getElementById('complaint-thread-panel'); document.getElementById('complaint-thread-title').textContent = `${complaint.category} · ${student?.name || 'Student'}`; const internal = currentRole === 'parent' ? '' : `<div class="complaint-internal"><b>Internal notes</b>${complaint.internalNotes.map((note) => `<p>${escapeHtml(note.text)} · ${escapeHtml(note.authorId)}</p>`).join('') || '<p>No internal notes.</p>'}</div>`; document.getElementById('complaint-thread-content').innerHTML = `<p><b>Priority:</b> ${escapeHtml(complaint.priority)} · <b>Status:</b> ${escapeHtml(complaint.status)}</p><p>${escapeHtml(complaint.description)}</p>${complaint.replies.map((reply) => `<div class="message-bubble"><b>${escapeHtml(reply.senderRole)}</b><p>${escapeHtml(reply.text)}</p></div>`).join('')}${internal}${currentRole === 'admin' ? `<button class="light-button small" type="button" onclick="assignComplaint('${complaint.id}')">Assign to Class Teacher</button><button class="light-button small" type="button" onclick="addComplaintInternalNote('${complaint.id}')">Add internal note</button>` : ''}${currentRole === 'teacher' ? `<button class="light-button small" type="button" onclick="updateComplaintStatus('${complaint.id}','Resolved')">Resolve</button><button class="text-button" type="button" onclick="updateComplaintStatus('${complaint.id}','In Progress')">In Progress</button>` : ''}${currentRole === 'parent' && ['Resolved','Closed'].includes(complaint.status) ? `<button class="light-button small" type="button" onclick="updateComplaintStatus('${complaint.id}','${complaint.status === 'Closed' ? 'Reopened' : 'Closed'}')">${complaint.status === 'Closed' ? 'Reopen' : 'Confirm Closure'}</button>` : ''}`; panel.classList.remove('hidden'); window.currentComplaintId = complaintId; renderComplaints(); }
function closeComplaintThread() { document.getElementById('complaint-thread-panel')?.classList.add('hidden'); window.currentComplaintId = null; }
function updateComplaintStatus(complaintId, status) { const complaint = complaints.find((item) => item.id === complaintId); if (!complaint) return; if (currentRole === 'teacher' && !getVisibleComplaints().some((item) => item.id === complaintId)) return; if (currentRole === 'parent' && complaint.parentAccountId !== currentAccount?.id) return; complaint.status = status; complaint.updatedAt = new Date().toISOString(); saveStore('complaints', complaints); openComplaintThread(complaintId); }
function assignComplaint(complaintId) { const complaint = complaints.find((item) => item.id === complaintId); const teacher = complaint && getClassTeacherForClass(getStudentClassId(complaint.studentId)); if (!complaint || !teacher) return; complaint.assignedTeacherId = teacher.id; complaint.status = 'Assigned'; saveStore('complaints', complaints); openComplaintThread(complaintId); }
function addComplaintInternalNote(complaintId) { const complaint = complaints.find((item) => item.id === complaintId); if (!complaint || currentRole !== 'admin') return; const text = window.prompt('Internal note:'); if (!text?.trim()) return; complaint.internalNotes.push({ text: text.trim(), authorId: currentAccount.id, createdAt: new Date().toISOString() }); saveStore('complaints', complaints); openComplaintThread(complaintId); }
document.getElementById('complaint-reply-form')?.addEventListener('submit', (event) => { event.preventDefault(); const complaint = complaints.find((item) => item.id === window.currentComplaintId); const text = document.getElementById('complaint-reply-text').value.trim(); if (!complaint || !text || !getVisibleComplaints().some((item) => item.id === complaint.id)) return; complaint.replies.push({ id: createUniqueId('complaint-reply'), senderRole: currentRole, senderId: currentAccount.id, text, sentAt: new Date().toISOString(), readByAccountIds: [currentAccount.id] }); complaint.status = currentRole === 'parent' ? 'Open' : 'In Progress'; complaint.updatedAt = new Date().toISOString(); saveStore('complaints', complaints); event.target.reset(); openComplaintThread(complaint.id); });

function openMessageThread(conversationId) {
    const conversation = parentMessages.find((item) => item.id === conversationId);
    if (!conversation) return;
    const student = students.find((item) => item.id === conversation.studentId);
    const canView = currentRole === 'parent' ? conversation.parentAccountId === currentAccount?.id : currentRole === 'teacher' ? teacherCanAccessClass(student?.classId) && conversation.teacherId === (getLoggedInTeacherProfile()?.id || currentAccount?.teacherId) : false;
    if (!canView) return;
    activeMessageId = conversationId;
    conversation.messages.forEach((message) => { message.readByAccountIds = Array.isArray(message.readByAccountIds) ? message.readByAccountIds : []; if (!message.readByAccountIds.includes(currentAccount.id)) message.readByAccountIds.push(currentAccount.id); });
    saveStore('parentMessages', parentMessages);
    const panel = document.getElementById('active-message-panel');
    document.getElementById('active-message-title').textContent = `${conversation.subject} · ${student?.name || 'Student'}`;
    const status = document.getElementById('active-message-status');
    status.textContent = conversation.status;
    status.className = `status ${conversation.status === 'Resolved' ? 'paid' : 'info'}`;
    document.getElementById('active-message-toggle-status').textContent = conversation.status === 'Resolved' ? 'Reopen' : 'Resolve';
    document.getElementById('active-message-thread').innerHTML = conversation.messages.map((message) => `<div class="message-bubble ${message.senderId === currentAccount?.id ? 'message-own' : ''}"><b>${escapeHtml(message.senderRole)}</b><p>${escapeHtml(message.text)}</p><small>${new Date(message.sentAt).toLocaleString('en-GB')}</small></div>`).join('');
    panel.classList.remove('hidden');
    renderParentMessages();
}

function closeMessageThread() { activeMessageId = null; document.getElementById('active-message-panel')?.classList.add('hidden'); }

document.getElementById('message-reply-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const conversation = parentMessages.find((item) => item.id === activeMessageId);
    const text = document.getElementById('message-reply-text').value.trim();
    if (!conversation || !text) return;
    conversation.messages.push({ id: createUniqueId('message-entry'), senderRole: currentRole, senderId: currentAccount.id, text, sentAt: new Date().toISOString(), readByAccountIds: [currentAccount.id] });
    conversation.status = currentRole === 'parent' ? 'Awaiting Teacher' : 'Awaiting Parent';
    conversation.updatedAt = new Date().toISOString();
    saveStore('parentMessages', parentMessages);
    event.target.reset();
    openMessageThread(conversation.id);
});

document.getElementById('active-message-toggle-status')?.addEventListener('click', () => {
    const conversation = parentMessages.find((item) => item.id === activeMessageId);
    if (!conversation || !['parent', 'teacher'].includes(currentRole)) return;
    conversation.status = conversation.status === 'Resolved' ? 'Open' : 'Resolved';
    conversation.updatedAt = new Date().toISOString();
    saveStore('parentMessages', parentMessages);
    openMessageThread(conversation.id);
});





// Section 13: Quizzes Implementation
function createUniqueId(prefix) {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return `${prefix}-${crypto.randomUUID()}`;
    return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createEmptyQuizQuestion() {
    return { id: createUniqueId('quiz-question'), question: '', options: ['', '', '', ''], correctOptionIndex: 0, explanation: '', marks: 1 };
}

function getQuizMaximumScore(questions) {
    return questions.reduce((total, question) => total + Number(question.marks || 1), 0);
}

function normalizeQuizRecord(quiz) {
    const questions = (quiz.questions || []).map((question) => {
        const options = Array.isArray(question.options) ? question.options.slice(0, 4) : ['', '', '', ''];
        while (options.length < 4) options.push('');
        const derivedIndex = Number.isInteger(question.correctOptionIndex) ? question.correctOptionIndex : Math.max(0, options.indexOf(question.answer));
        return { ...question, id: question.id || createUniqueId('quiz-question'), options, correctOptionIndex: derivedIndex >= 0 && derivedIndex < 4 ? derivedIndex : 0, marks: Number(question.marks || 1), explanation: question.explanation || '' };
    });
    return { ...quiz, questions, teacherId: quiz.teacherId || quiz.teacherAccountId || null, teacherAccountId: quiz.teacherAccountId || null, totalMarks: quiz.totalMarks || getQuizMaximumScore(questions), updatedAt: quiz.updatedAt || quiz.createdAt || new Date().toISOString(), createdAt: quiz.createdAt || new Date().toISOString() };
}

publishedQuizzes = publishedQuizzes.map(normalizeQuizRecord);
saveStore('futureschoolQuizzes', publishedQuizzes);

let quizBuilderQuestions = [];
let quizBuilderInitialized = false;

function initializeQuizBuilder() {
    quizBuilderQuestions = [createEmptyQuizQuestion()];
    quizBuilderInitialized = true;
    renderQuizQuestionBuilder();
}

function syncQuizBuilderStateFromDOM() {
    const builder = document.getElementById('quiz-questions-builder');
    if (!builder) return;
    quizBuilderQuestions = Array.from(builder.querySelectorAll('[data-question-id]')).map((card) => ({
        id: card.dataset.questionId,
        question: card.querySelector('.quiz-question-text').value.trim(),
        options: Array.from(card.querySelectorAll('.quiz-option')).map((input) => input.value.trim()),
        correctOptionIndex: Number(card.querySelector('.quiz-correct-option').value),
        explanation: card.querySelector('.quiz-explanation').value.trim(),
        marks: Number(card.querySelector('.quiz-question-marks').value)
    }));
}


function updateQuizBuilderSummary() {
    const questionCount = document.getElementById('quiz-builder-question-count');
    const totalMarks = document.getElementById('quiz-builder-total-marks');
    if (questionCount) questionCount.textContent = `${quizBuilderQuestions.length} Question${quizBuilderQuestions.length === 1 ? '' : 's'}`;
    if (totalMarks) totalMarks.textContent = `Total Marks: ${getQuizMaximumScore(quizBuilderQuestions)}`;
}

function renderQuizQuestionBuilder() {
    const builder = document.getElementById('quiz-questions-builder');
    if (!builder) return;
    builder.innerHTML = quizBuilderQuestions.map((question, index) => `
        <div class="quiz-question-card" data-question-id="${escapeHtml(question.id)}">
            <div class="panel-heading"><h4>Question ${index + 1}</h4><div class="quiz-question-actions"><button class="text-button" type="button" onclick="moveQuizQuestionUp('${question.id}')">Move Up</button><button class="text-button" type="button" onclick="moveQuizQuestionDown('${question.id}')">Move Down</button><button class="text-button danger-button" type="button" onclick="removeQuizQuestion('${question.id}')">Remove</button></div></div>
            <label>Question text<textarea class="quiz-question-text" required>${escapeHtml(question.question)}</textarea></label>
            <div class="form-grid">
                ${question.options.map((option, optionIndex) => `<label>Option ${String.fromCharCode(65 + optionIndex)}<input class="quiz-option" data-option-index="${optionIndex}" value="${escapeHtml(option)}" required></label>`).join('')}
            </div>
            <div class="form-grid"><label>Correct answer<select class="quiz-correct-option"><option value="0" ${question.correctOptionIndex === 0 ? 'selected' : ''}>Option A</option><option value="1" ${question.correctOptionIndex === 1 ? 'selected' : ''}>Option B</option><option value="2" ${question.correctOptionIndex === 2 ? 'selected' : ''}>Option C</option><option value="3" ${question.correctOptionIndex === 3 ? 'selected' : ''}>Option D</option></select></label><label>Marks<input class="quiz-question-marks" type="number" min="1" step="1" value="${Number(question.marks || 1)}" required></label></div>
            <label>Explanation<textarea class="quiz-explanation" required>${escapeHtml(question.explanation)}</textarea></label>
        </div>
    `).join('');
    builder.querySelectorAll('input, textarea, select').forEach((input) => input.addEventListener('input', () => { syncQuizBuilderStateFromDOM(); updateQuizBuilderSummary(); }));
    updateQuizBuilderSummary();
}

function addQuizQuestion() { syncQuizBuilderStateFromDOM(); quizBuilderQuestions.push(createEmptyQuizQuestion()); renderQuizQuestionBuilder(); }
function removeQuizQuestion(questionId) { syncQuizBuilderStateFromDOM(); if (quizBuilderQuestions.length === 1) return; if (!window.confirm('Remove this question?')) return; quizBuilderQuestions = quizBuilderQuestions.filter((question) => question.id !== questionId); renderQuizQuestionBuilder(); }
function moveQuizQuestionUp(questionId) { syncQuizBuilderStateFromDOM(); const index = quizBuilderQuestions.findIndex((question) => question.id === questionId); if (index > 0) [quizBuilderQuestions[index - 1], quizBuilderQuestions[index]] = [quizBuilderQuestions[index], quizBuilderQuestions[index - 1]]; renderQuizQuestionBuilder(); }
function moveQuizQuestionDown(questionId) { syncQuizBuilderStateFromDOM(); const index = quizBuilderQuestions.findIndex((question) => question.id === questionId); if (index >= 0 && index < quizBuilderQuestions.length - 1) [quizBuilderQuestions[index], quizBuilderQuestions[index + 1]] = [quizBuilderQuestions[index + 1], quizBuilderQuestions[index]]; renderQuizQuestionBuilder(); }

function validateQuizBuilderQuestions() {
    if (!quizBuilderQuestions.length) return { valid: false, message: 'Quiz must contain at least one question.' };
    const seen = new Set();
    for (let index = 0; index < quizBuilderQuestions.length; index += 1) {
        const question = quizBuilderQuestions[index];
        const number = index + 1;
        if (!question.question) return { valid: false, message: `Question ${number} text cannot be empty.` };
        const normalizedText = question.question.toLowerCase();
        if (seen.has(normalizedText)) return { valid: false, message: `Question ${number} duplicates another question.` };
        seen.add(normalizedText);
        if (question.options.length !== 4 || question.options.some((option) => !option)) return { valid: false, message: `Question ${number} requires four non-empty options.` };
        if (new Set(question.options.map((option) => option.toLowerCase())).size !== 4) return { valid: false, message: `Question ${number} contains duplicate options.` };
        if (!Number.isInteger(question.correctOptionIndex) || question.correctOptionIndex < 0 || question.correctOptionIndex > 3) return { valid: false, message: `Question ${number} has an invalid correct answer.` };
        if (!question.explanation) return { valid: false, message: `Question ${number} explanation cannot be empty.` };
        if (!Number.isInteger(question.marks) || question.marks < 1) return { valid: false, message: `Question ${number} marks must be a positive whole number.` };
    }
    return { valid: true, questions: quizBuilderQuestions };
}

function teacherOwnsQuiz(quiz) {
    return currentRole === 'teacher' && (quiz.teacherAccountId === currentAccount?.id || quiz.teacherId === currentAccount?.teacherId);
}

function renderTeacherQuizzes() {
    const list = document.getElementById('teacher-quiz-list');
    if (!list) return;
    const quizzes = publishedQuizzes.filter((q) => {
        if (currentRole === 'teacher') return teacherOwnsQuiz(q) && teacherCanManageSubject(q.targetClass, q.subject);
        return true;
    });
    if (!quizzes.length) { list.innerHTML = '<p class="muted">No quizzes created yet.</p>'; return; }
    list.innerHTML = quizzes.map((quiz) => { const attempts = quizAttempts.filter((attempt) => attempt.quizId === quiz.id); const targetClass = classes.find((schoolClass) => schoolClass.id === quiz.targetClass); return `<div class="published-quiz"><div class="panel-heading" style="margin:0 0 6px;"><b>${escapeHtml(quiz.title)}</b><span class="status ${quiz.status === 'Published' ? 'published' : 'draft'}">${escapeHtml(quiz.status)}</span></div><span>${escapeHtml(quiz.subject)} · Target: ${targetClass ? `${targetClass.name}-${targetClass.section}` : quiz.targetClass} · Due: ${escapeHtml(quiz.dueDate)}</span><p>${quiz.questions.length} Question(s) · Total Marks: ${quiz.totalMarks}</p><small>Student Attempts Recorded: ${attempts.length}</small><div class="quiz-list-actions"><button class="text-button" type="button" onclick="editQuiz('${quiz.id}')">Edit</button><button class="text-button" type="button" onclick="toggleQuizPublish('${quiz.id}')">${quiz.status === 'Published' ? 'Unpublish' : 'Publish'}</button><button class="text-button" type="button" onclick="viewQuizAttempts('${quiz.id}')">View Attempts (${attempts.length})</button><button class="text-button danger-button" type="button" onclick="deleteQuiz('${quiz.id}')">Delete</button></div></div>`; }).join('');
}

function resetQuizForm() { const form = document.getElementById('teacher-quiz-form'); if (form) form.reset(); document.getElementById('teacher-quiz-edit-id').value = ''; document.getElementById('teacher-quiz-form-title').textContent = 'Create new quiz'; initializeQuizBuilder(); }

document.getElementById('add-quiz-question')?.addEventListener('click', addQuizQuestion);
document.getElementById('teacher-quiz-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    syncQuizBuilderStateFromDOM();
    const message = document.getElementById('teacher-quiz-message');
    const dueDate = document.getElementById('teacher-quiz-due').value;
    const targetClass = document.getElementById('teacher-quiz-class').value;
    const validation = validateQuizBuilderQuestions();
    if (!validation.valid) { message.textContent = validation.message; message.className = 'form-message error'; return; }
    if (dueDate < todayISO) { message.textContent = 'Quiz due date cannot be before today.'; message.className = 'form-message error'; return; }
    const subject = document.getElementById('teacher-quiz-subject').value;
    if (currentRole === 'teacher' && !teacherCanManageSubject(targetClass, subject)) {
        message.textContent = 'You are not authorized to create quizzes for this class and subject.';
        message.className = 'form-message error';
        return;
    }
    const questions = validation.questions.map((question) => ({ ...question, answer: question.options[question.correctOptionIndex] }));
    const editId = document.getElementById('teacher-quiz-edit-id').value;
    const existing = editId ? publishedQuizzes.find((quiz) => quiz.id === editId) : null;
    if (existing && !teacherOwnsQuiz(existing)) { message.textContent = 'You can only edit quizzes you created.'; message.className = 'form-message error'; return; }
    const quizData = { title: document.getElementById('teacher-quiz-title').value.trim(), subject: document.getElementById('teacher-quiz-subject').value, targetClass, dueDate, retryAllowed: document.getElementById('teacher-quiz-retry').checked, status: document.getElementById('teacher-quiz-status').value, teacherId: currentAccount.teacherId, teacherAccountId: currentAccount.id, teacherName: currentAccount.name, totalMarks: getQuizMaximumScore(questions), questions, updatedAt: new Date().toISOString() };
    if (existing) Object.assign(existing, quizData); else publishedQuizzes.unshift({ id: createUniqueId('quiz'), ...quizData, createdAt: new Date().toISOString() });
    saveStore('futureschoolQuizzes', publishedQuizzes); message.textContent = existing ? 'Quiz updated successfully.' : 'Quiz saved successfully.'; message.className = 'form-message'; resetQuizForm(); renderTeacherQuizzes();
});

function editQuiz(quizId) { const quiz = publishedQuizzes.find((item) => item.id === quizId); if (!quiz || !teacherOwnsQuiz(quiz)) return; document.getElementById('teacher-quiz-edit-id').value = quiz.id; document.getElementById('teacher-quiz-title').value = quiz.title; document.getElementById('teacher-quiz-subject').value = quiz.subject; document.getElementById('teacher-quiz-class').value = quiz.targetClass; document.getElementById('teacher-quiz-due').value = quiz.dueDate; document.getElementById('teacher-quiz-status').value = quiz.status; document.getElementById('teacher-quiz-retry').checked = quiz.retryAllowed !== false; document.getElementById('teacher-quiz-form-title').textContent = `Edit ${quiz.title}`; quizBuilderQuestions = quiz.questions.map((question) => ({ id: question.id, question: question.question, options: [...question.options], correctOptionIndex: question.correctOptionIndex, explanation: question.explanation, marks: question.marks })); renderQuizQuestionBuilder(); }
function toggleQuizPublish(quizId) { const quiz = publishedQuizzes.find((item) => item.id === quizId); if (!quiz) return;
    if (currentRole === 'teacher' && (!teacherOwnsQuiz(quiz) || !teacherCanManageSubject(quiz.targetClass, quiz.subject))) { alert('You are not authorized to modify this quiz.'); return; } quiz.status = quiz.status === 'Published' ? 'Draft' : 'Published'; quiz.updatedAt = new Date().toISOString(); saveStore('futureschoolQuizzes', publishedQuizzes); renderTeacherQuizzes(); }
function deleteQuiz(quizId) { const quiz = publishedQuizzes.find((item) => item.id === quizId); if (!quiz) return;
    if (currentRole === 'teacher' && (!teacherOwnsQuiz(quiz) || !teacherCanManageSubject(quiz.targetClass, quiz.subject))) { alert('You are not authorized to delete this quiz.'); return; }
    if (!window.confirm('Are you sure you want to delete this quiz?')) return; publishedQuizzes = publishedQuizzes.filter((item) => item.id !== quizId); saveStore('futureschoolQuizzes', publishedQuizzes); renderTeacherQuizzes(); }
function viewQuizAttempts(quizId) { const quiz = publishedQuizzes.find((item) => item.id === quizId); if (!quiz || !teacherOwnsQuiz(quiz)) return; const attempts = quizAttempts.filter((attempt) => attempt.quizId === quizId); const report = attempts.length ? attempts.map((attempt, index) => `Attempt ${index + 1}: ${attempt.studentName} · ${attempt.score}/${attempt.maxScore} (${attempt.percentage}%) · ${new Date(attempt.submittedAt).toLocaleDateString('en-GB')}`).join('\n') : 'No attempts submitted for this quiz yet.'; window.alert(report); }

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
        const attempts = quizAttempts.filter((a) => a.quizId === q.id && a.studentId === student.id).sort((a, b) => new Date(a.submittedAt) - new Date(b.submittedAt));
        const attempt = attempts[attempts.length - 1];
        const maxScore = getQuizMaximumScore(q.questions);

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
                    ${attempts.length > 0 ? `<br><button class="text-button" type="button" style="margin-top:6px;" onclick="viewStudentAttemptHistory('${q.id}')">View Attempt History</button>` : ''}
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
let quizAnswerHistory = [];
let currentQuizAttemptSaved = false;

function renderInteractiveQuestion() {
    const q = activeQuizQuestions[currentQuestionIndex];
    if (!q) return;

    currentSelectedOption = '';
    if (!quizAnswerHistory[currentQuestionIndex]) quizAnswerHistory[currentQuestionIndex] = null;
    document.getElementById('question-number').textContent = String(currentQuestionIndex + 1).padStart(2, '0');
    document.getElementById('question-subject').textContent = currentQuizTopic.toUpperCase();
    document.getElementById('question-text').textContent = q.question;
    document.getElementById('quiz-progress').textContent = `Question ${currentQuestionIndex + 1} of ${activeQuizQuestions.length} · Score: ${interactiveScore} / ${getQuizMaximumScore(activeQuizQuestions)}`;
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
    document.getElementById('quiz-score').textContent = `0 / ${getQuizMaximumScore(activeQuizQuestions)}`;
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

function viewStudentAttemptHistory(quizId) {
    const student = getCurrentStudent();
    if (!student) return;
    const quiz = publishedQuizzes.find((q) => q.id === quizId) || (typeof quizzes !== 'undefined' ? quizzes.find((q) => q.id === quizId) : null);
    const attempts = quizAttempts.filter((a) => a.quizId === quizId && a.studentId === student.id);
    if (!attempts.length) {
        alert('No attempts recorded for this quiz yet.');
        return;
    }
    const historyText = attempts.map((a, i) => `Attempt #${i + 1}: Scored ${a.score}/${a.maxScore} (${a.percentage}%) on ${new Date(a.submittedAt).toLocaleString()}`).join('\n');
    alert(`Attempt History for "${quiz ? quiz.title : 'Quiz'}":\n\n${historyText}`);
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
    if (currentRole === 'teacher' && !teacherCanManageSubject(targetClass, subject)) {
        alert('You are not authorized to create lesson plans for this class and subject.');
        return;
    }
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
    if (currentRole === 'teacher' && !teacherCanManageSubject(targetClass, subject)) {
        alert('You are not authorized to generate question papers for this class and subject.');
        return;
    }
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
    const summary = getStudentAttendanceSummary(student.id, defaultAcademicYearId);
    document.getElementById('student-stat-attendance').textContent = `${summary.percentage}%`;
    document.getElementById('student-stat-attended-days').textContent = `${summary.attendedDayEquivalents} / ${summary.workingDays} days attended`;

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

    // Today's attendance for teacher classes (using dailyResult)
    const todayAtt = attendanceRecords.filter((r) => r.date === todayISO && teacherClassIds.includes(r.classId));
    const presentCount = todayAtt.filter((r) => r.dailyResult === 'Full Day' || r.dailyResult === 'Half Day').length;
    const rate = todayAtt.length ? Math.round((presentCount / todayAtt.length) * 100) : 0;
    document.getElementById('teacher-attendance-rate').textContent = `${rate}%`;
    document.getElementById('teacher-attendance-count').textContent = `${presentCount} present today`;

    // Homework count & pending reviews for authorized subjects
    const assignedHw = homeworkRecords.filter((h) => teacherCanManageSubject(h.classId, h.subject));
    document.getElementById('teacher-homework-count').textContent = assignedHw.length;
    let pendingReviews = 0;
    assignedHw.forEach((h) => {
        h.submissions?.forEach((s) => {
            if (s.status !== 'Reviewed') pendingReviews += 1;
        });
    });
    document.getElementById('teacher-homework-pending-reviews').textContent = `${pendingReviews} reviews pending`;

    // Class performance summary bars (derived strictly from active subjectAllocations)
    const perfContainer = document.getElementById('teacher-class-performance');
    if (perfContainer) {
        const allocations = getSubjectAllocationsForTeacher(currentAccount?.teacherId);
        const subjects = [...new Set(allocations.map((a) => a.subject))];
        if (!subjects.length) {
            perfContainer.innerHTML = '<p class="muted">No active subject allocations.</p>';
        } else {
            perfContainer.innerHTML = subjects.map((sub) => {
                const subMarks = marksRecords.filter((m) => m.subject === sub && teacherCanManageSubject(m.classId, m.subject) && m.status === 'Published');
                const avg = subMarks.length ? Math.round(subMarks.reduce((sum, m) => sum + Number(m.percentage || 0), 0) / subMarks.length) : 0;
                return `
                    <div class="progress-row">
                        <span>${escapeHtml(sub)}</span>
                        <b>${subMarks.length ? `${avg}% Average` : 'No marks recorded'}</b>
                        <div class="progress"><i style="width:${avg}%"></i></div>
                    </div>
                `;
            }).join('');
        }
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
        tbody.innerHTML = '<tr><td colspan="8" class="muted">No students in this class section.</td></tr>';
        return;
    }

    tbody.innerHTML = roster.map((s) => {
        const summary = getStudentAttendanceSummary(s.id);
        const rate = summary.workingDays ? `${summary.percentage}%` : '—';

        return `<tr>
            <td>${escapeHtml(s.roll)}</td>
            <td><b>${escapeHtml(s.name)}</b></td>
            <td><code>${escapeHtml(s.admissionNumber)}</code></td>
            <td>${escapeHtml(s.className)}-${escapeHtml(s.section)}</td>
            <td>${escapeHtml(s.parentName)}</td>
            <td>${escapeHtml(s.parentMobile)}</td>
            <td><strong>${rate}</strong></td>
            <td><button class="text-button" type="button" onclick="viewTeacherStudentProfile('${s.id}')">View</button></td>
        </tr>`;
    }).join('');
}

document.getElementById('teacher-students-class-filter')?.addEventListener('change', renderTeacherStudentsRoster);

function viewTeacherStudentProfile(studentId) {
    const student = students.find((s) => s.id === studentId);
    const panel = document.getElementById('teacher-student-profile-panel');
    const content = document.getElementById('teacher-student-profile-content');
    const title = document.getElementById('teacher-student-profile-title');
    if (!student || !panel || !content) return;

    if (title) title.textContent = `Student Profile: ${student.name}`;
    const att = getStudentAttendanceSummary(student.id);
    const parent = parents.find((p) => p.id === student.parentId) || { name: student.parentName, phone: student.parentMobile, email: '—' };
    const marks = marksRecords.filter((m) => m.studentId === student.id && m.status === 'Published');

    content.innerHTML = `
        <div class="two-column" style="margin-top:15px;">
            <div>
                <h4>Personal & Enrollment Information</h4>
                <p><b>Full Name:</b> ${escapeHtml(student.name)}</p>
                <p><b>Admission Number:</b> <code>${escapeHtml(student.admissionNumber)}</code></p>
                <p><b>Class & Section:</b> ${escapeHtml(student.className)}-${escapeHtml(student.section)} (Roll: ${escapeHtml(student.roll)})</p>
                <p><b>Date of Birth:</b> ${escapeHtml(student.dob || '—')}</p>
                <p><b>Blood Group:</b> ${escapeHtml(student.bloodGroup || '—')}</p>
                <p><b>Address:</b> ${escapeHtml(student.address || '—')}</p>
            </div>
            <div>
                <h4>Parent & Guardian Details</h4>
                <p><b>Parent Name:</b> ${escapeHtml(parent.name || student.parentName || '—')}</p>
                <p><b>Contact Mobile:</b> ${escapeHtml(parent.phone || student.parentMobile || '—')}</p>
                <p><b>Email:</b> ${escapeHtml(parent.email || '—')}</p>
                <h4 style="margin-top:15px;">Attendance Summary</h4>
                <p><b>Rate:</b> ${att.workingDays ? `${att.percentage}% (${att.attendedDayEquivalents} of ${att.workingDays} days)` : 'No records'}</p>
            </div>
        </div>
        <div style="margin-top:20px;">
            <h4>Recent Academic Marks (Published)</h4>
            ${marks.length ? `
                <table>
                    <thead>
                        <tr><th>Subject</th><th>Exam</th><th>Score</th><th>Max</th><th>Percentage</th><th>Grade</th></tr>
                    </thead>
                    <tbody>
                        ${marks.map((m) => `<tr><td>${escapeHtml(m.subject)}</td><td>${escapeHtml(m.exam)}</td><td>${m.score}</td><td>${m.maximumMarks}</td><td>${m.percentage}%</td><td><strong>${escapeHtml(m.grade)}</strong></td></tr>`).join('')}
                    </tbody>
                </table>
            ` : '<p class="muted">No published examination marks available for this student.</p>'}
        </div>
    `;
    panel.classList.remove('hidden');
    panel.scrollIntoView({ behavior: 'smooth' });
}

function closeTeacherStudentProfile() {
    const panel = document.getElementById('teacher-student-profile-panel');
    if (panel) panel.classList.add('hidden');
}


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
        teacherSelect.innerHTML = teachers.map((t) => {
            const teacherSubs = [...new Set(getSubjectAllocationsForTeacher(t.id).map((a) => a.subject))];
            return `<option value="${t.id}">${escapeHtml(t.name)}${teacherSubs.length ? ` (${teacherSubs.join(', ')})` : ''}</option>`;
        }).join('');
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



function currentAcademicYear() { return academicYears.find((year) => year.isCurrent) || academicYears[0]; }
function renderAcademicYears() {
    const list = document.getElementById('academic-year-list');
    if (!list) return;
    list.innerHTML = academicYears.slice().reverse().map((year) => `<div class="account-row"><div><b>${escapeHtml(year.name)}</b><small>${escapeHtml(year.startDate)} to ${escapeHtml(year.endDate)} · ${escapeHtml(year.status)}</small></div><span class="status ${year.isCurrent ? 'published' : 'info'}">${year.isCurrent ? 'Current' : 'Previous'}</span><button class="text-button" type="button" onclick="setCurrentAcademicYear('${year.id}')">${year.isCurrent ? 'Selected' : 'Set current'}</button></div>`).join('') || '<p class="muted">No academic years have been created yet.</p>';
    const topbar = document.getElementById('current-academic-year');
    if (topbar) topbar.textContent = currentAcademicYear()?.name || 'No academic year';
}
function setCurrentAcademicYear(id) { academicYears.forEach((year) => { year.isCurrent = year.id === id; if (year.isCurrent) year.status = 'Active'; }); saveStore('academicYears', academicYears); renderAcademicYears(); }
document.getElementById('academic-year-form')?.addEventListener('submit', (event) => { event.preventDefault(); const name = document.getElementById('academic-year-name').value.trim(); const startDate = document.getElementById('academic-year-start').value; const endDate = document.getElementById('academic-year-end').value; const message = document.getElementById('academic-year-message'); if (endDate <= startDate) { message.textContent = 'End date must be after start date.'; message.className = 'form-message error'; return; } if (academicYears.some((year) => year.name === name)) { message.textContent = 'This academic year already exists.'; message.className = 'form-message error'; return; } academicYears.push({ id: `ay-${Date.now()}`, name, startDate, endDate, status: 'Active', isCurrent: false }); saveStore('academicYears', academicYears); message.textContent = 'Academic year saved.'; message.className = 'form-message'; event.target.reset(); renderAcademicYears(); });

function populatePromotionSelectors() { const yearIds = ['promotion-from-year', 'promotion-to-year']; yearIds.forEach((id) => { const el = document.getElementById(id); if (el) el.innerHTML = academicYears.map((year) => `<option value="${year.id}">${escapeHtml(year.name)}</option>`).join(''); }); ['promotion-class', 'promotion-destination'].forEach((id) => { const el = document.getElementById(id); if (el) el.innerHTML = classes.map((item) => `<option value="${item.id}">${escapeHtml(item.name)}-${escapeHtml(item.section)}</option>`).join(''); }); renderPromotionStudents(); }
function renderPromotionStudents() { const list = document.getElementById('promotion-student-list'); const classId = document.getElementById('promotion-class')?.value; if (!list) return; const roster = students.filter((student) => student.classId === classId && student.status === 'Active'); list.innerHTML = roster.map((student) => `<label class="checkbox-label"><input type="checkbox" value="${student.id}"> ${escapeHtml(student.name)} (${escapeHtml(student.admissionNumber)})</label>`).join('') || '<p class="muted">No active students in this class.</p>'; }
document.getElementById('promotion-class')?.addEventListener('change', renderPromotionStudents);
document.getElementById('promotion-form')?.addEventListener('submit', (event) => { event.preventDefault(); const selected = Array.from(document.querySelectorAll('#promotion-student-list input:checked')).map((input) => input.value); const fromClassId = document.getElementById('promotion-class').value; const toClassId = document.getElementById('promotion-destination').value; const status = document.getElementById('promotion-status').value; const fromAcademicYearId = document.getElementById('promotion-from-year').value; const toAcademicYearId = document.getElementById('promotion-to-year').value; const message = document.getElementById('promotion-message'); if (!selected.length) { message.textContent = 'Select at least one student.'; message.className = 'form-message error'; return; } selected.forEach((studentId) => { const student = students.find((item) => item.id === studentId); const destination = classes.find((item) => item.id === toClassId); if (student && destination && status !== 'Graduated' && status !== 'Transferred') { student.classId = destination.id; student.className = destination.name; student.section = destination.section; } if (student && status === 'Graduated') student.status = 'Graduated'; promotionHistory.push({ id: `promotion-${Date.now()}-${studentId}`, studentId, fromAcademicYearId, toAcademicYearId, fromClassId, toClassId, promotionStatus: status, promotedAt: new Date().toISOString() }); }); saveStore('students', students); saveStore('promotionHistory', promotionHistory); message.textContent = `${selected.length} student record(s) updated without deleting academic history.`; message.className = 'form-message'; renderPromotionHistory(); renderPromotionStudents(); });
function renderPromotionHistory() { const list = document.getElementById('promotion-history-list'); if (!list) return; list.innerHTML = promotionHistory.slice().reverse().map((item) => { const student = students.find((entry) => entry.id === item.studentId); return `<div class="account-row"><div><b>${escapeHtml(student?.name || item.studentId)}</b><small>${escapeHtml(item.promotionStatus)} · ${new Date(item.promotedAt).toLocaleDateString('en-GB')}</small></div></div>`; }).join('') || '<p class="muted">No promotion history recorded yet.</p>'; }

function populateCertificateStudents() { const select = document.getElementById('certificate-student'); if (select) select.innerHTML = students.filter((student) => student.status !== 'Inactive').map((student) => `<option value="${student.id}">${escapeHtml(student.name)} (${escapeHtml(student.admissionNumber)})</option>`).join(''); }
function renderCertificateHistory() { const list = document.getElementById('certificate-history-list'); if (!list) return; list.innerHTML = certificateHistory.slice().reverse().map((item) => `<div class="account-row"><div><b>${escapeHtml(item.certificateNumber)} · ${escapeHtml(item.certificateType)}</b><small>${escapeHtml(item.studentId)} · Issued ${escapeHtml(item.issuedAt)}</small></div><button class="text-button" type="button" onclick="printCertificate('${item.id}')">Print</button></div>`).join('') || '<p class="muted">No certificates have been issued yet.</p>'; }
document.getElementById('certificate-form')?.addEventListener('submit', (event) => { event.preventDefault(); const student = students.find((item) => item.id === document.getElementById('certificate-student').value); const issueDate = document.getElementById('certificate-date').value; const type = document.getElementById('certificate-type').value; const record = { id: `certificate-${Date.now()}`, certificateNumber: `CERT-${Date.now().toString().slice(-8)}`, certificateType: type, studentId: student.id, academicYearId: currentAcademicYear()?.id, purpose: document.getElementById('certificate-purpose').value.trim(), issuedAt: issueDate, issuedBy: currentAccount?.id || 'admin' }; certificateHistory.push(record); saveStore('certificateHistory', certificateHistory); document.getElementById('certificate-message').textContent = 'Certificate generated. Use Print / Save as PDF.'; document.getElementById('certificate-message').className = 'form-message'; renderCertificatePreview(record); renderCertificateHistory(); });
function renderCertificatePreview(record) { const student = students.find((item) => item.id === record.studentId); const preview = document.getElementById('certificate-preview'); if (!student || !preview) return; preview.innerHTML = `<div class="report-header"><div class="report-brand"><div class="brand-mark">${escapeHtml(schoolSettings.initials)}</div><h2>${escapeHtml(schoolSettings.name)}</h2></div><span class="status published">${escapeHtml(record.certificateNumber)}</span></div><p>${escapeHtml(record.certificateType)}</p><p style="margin-top:20px;">This certifies that <b>${escapeHtml(student.name)}</b>, admission number <b>${escapeHtml(student.admissionNumber)}</b>, date of birth ${escapeHtml(student.dob)}, is enrolled in ${escapeHtml(student.className)}-${escapeHtml(student.section)} during ${escapeHtml(currentAcademicYear()?.name || '')}.</p><p style="margin-top:20px;">Purpose: ${escapeHtml(record.purpose || 'School record')}</p><p style="margin-top:35px;">Issue date: ${escapeHtml(record.issuedAt)}</p><p style="margin-top:45px;">Principal signature: ____________________<br>${escapeHtml(schoolSettings.principal)}</p><div class="report-actions"><button class="primary-button small" type="button" onclick="printCertificate('${record.id}')">Print / Save as PDF</button></div>`; }
function printCertificate(id) { const record = certificateHistory.find((item) => item.id === id); if (!record) return; const preview = document.getElementById('certificate-preview'); if (preview) window.print(); }

function renderStaffAttendance() { const list = document.getElementById('staff-attendance-list'); if (!list) return; const date = document.getElementById('staff-attendance-date').value || todayISO; document.getElementById('staff-attendance-date').value = date; list.innerHTML = teachers.filter((teacher) => teacher.active).map((teacher) => { const record = staffAttendanceRecords.find((item) => item.teacherId === teacher.id && item.date === date); return `<div class="account-row" data-teacher-id="${teacher.id}"><div><b>${escapeHtml(teacher.name)}</b><small>${escapeHtml(teacher.email)}</small></div><select class="staff-status"><option ${record?.status === 'Present' || !record ? 'selected' : ''}>Present</option><option ${record?.status === 'Absent' ? 'selected' : ''}>Absent</option><option ${record?.status === 'Late' ? 'selected' : ''}>Late</option><option ${record?.status === 'Leave' ? 'selected' : ''}>Leave</option></select><input class="staff-remark" placeholder="Remark" value="${escapeHtml(record?.remarks || '')}"></div>`; }).join('') || '<p class="muted">No active teachers are available.</p>'; }
function markAllStaffPresent() { document.querySelectorAll('.staff-status').forEach((select) => { select.value = 'Present'; }); }
function saveStaffAttendance() { const date = document.getElementById('staff-attendance-date').value; document.querySelectorAll('#staff-attendance-list [data-teacher-id]').forEach((row) => { const teacherId = row.dataset.teacherId; const existing = staffAttendanceRecords.find((item) => item.teacherId === teacherId && item.date === date); const data = { id: existing?.id || `staff-${teacherId}-${date}`, teacherId, date, status: row.querySelector('.staff-status').value, remarks: row.querySelector('.staff-remark').value.trim(), markedBy: currentAccount?.id || 'admin' }; if (existing) Object.assign(existing, data); else staffAttendanceRecords.push(data); }); saveStore('staffAttendance', staffAttendanceRecords); document.getElementById('staff-attendance-message').textContent = 'Staff attendance saved.'; renderStaffAttendanceSummary(); }
function renderStaffAttendanceSummary() { const container = document.getElementById('staff-attendance-summary'); if (!container) return; const month = (document.getElementById('staff-attendance-date')?.value || todayISO).slice(0, 7); const records = staffAttendanceRecords.filter((item) => item.date.startsWith(month)); const counts = ['Present', 'Absent', 'Late', 'Leave'].map((status) => `${status}: ${records.filter((item) => item.status === status).length}`).join(' · '); container.textContent = records.length ? counts : 'No staff attendance has been recorded for this month.'; }
document.getElementById('staff-attendance-date')?.addEventListener('change', renderStaffAttendance);

function renderCalendar() { const list = document.getElementById('calendar-list'); const filter = document.getElementById('calendar-filter'); if (!list) return; if (filter && filter.options.length === 1) filter.innerHTML += [...new Set(calendarEvents.map((event) => event.eventType))].map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join(''); const selected = filter?.value || 'all'; const events = calendarEvents.filter((event) => selected === 'all' || event.eventType === selected).sort((a, b) => a.startDate.localeCompare(b.startDate)); list.innerHTML = events.map((event) => `<div class="notice"><b>${escapeHtml(event.title)}</b><span>${escapeHtml(event.startDate)}${event.endDate !== event.startDate ? ` to ${escapeHtml(event.endDate)}` : ''} · ${escapeHtml(event.eventType)} · ${escapeHtml(event.audience)}</span><small>${escapeHtml(event.description || '')}</small></div>`).join('') || '<p class="muted">No calendar events match this filter.</p>'; }
document.getElementById('calendar-form')?.addEventListener('submit', (event) => { event.preventDefault(); const startDate = document.getElementById('calendar-start').value; const endDate = document.getElementById('calendar-end').value; const message = document.getElementById('calendar-message'); if (endDate < startDate) { message.textContent = 'End date cannot be before start date.'; message.className = 'form-message error'; return; } calendarEvents.push({ id: `event-${Date.now()}`, title: document.getElementById('calendar-title').value.trim(), eventType: document.getElementById('calendar-type').value, startDate, endDate, audience: document.getElementById('calendar-audience').value, description: document.getElementById('calendar-description').value.trim(), status: 'Published' }); saveStore('calendarEvents', calendarEvents); message.textContent = 'Calendar event added.'; message.className = 'form-message'; event.target.reset(); renderCalendar(); });


function populateHallTicketStudents() {
    const select = document.getElementById('hall-ticket-student');
    if (!select) return;
    const selector = document.getElementById('hall-ticket-student-selector');
    const currentStudent = currentRole === 'student' ? getCurrentStudent() : currentRole === 'parent' ? getSelectedParentChild() : null;
    if (selector) selector.classList.toggle('hidden', Boolean(currentStudent));
    let availableStudents = students.filter((s) => s.status === 'Active');
    if (currentRole === 'teacher') {
        const teacherClasses = getTeacherClasses(currentAccount);
        const classIds = teacherClasses.map((c) => c.id);
        availableStudents = availableStudents.filter((s) => classIds.includes(s.classId));
    } else if (currentRole === 'parent') {
        availableStudents = getLinkedStudentsForParent();
    } else if (currentRole === 'student') {
        const s = getCurrentStudent();
        availableStudents = s ? [s] : [];
    }
    select.innerHTML = availableStudents.map((s) => `<option value="${s.id}">${escapeHtml(s.name)} (${escapeHtml(s.className)}-${escapeHtml(s.section)})</option>`).join('');
    if (currentStudent) select.value = currentStudent.id;
    refreshHallTicketEligibility();
}

function getHallTicketStudent() { return currentRole === 'student' ? getCurrentStudent() : currentRole === 'parent' ? getSelectedParentChild() : students.find((s) => s.id === document.getElementById('hall-ticket-student')?.value); }
function refreshHallTicketEligibility() {
    const student = getHallTicketStudent();
    const details = document.getElementById('hall-ticket-student-details');
    const eligibility = document.getElementById('hall-ticket-eligibility');
    const generateButton = document.getElementById('hall-ticket-generate');
    const feesButton = document.getElementById('hall-ticket-go-fees');
    if (!student) { if (details) details.innerHTML = '<p class="muted">No student selected.</p>'; return; }
    const overdue = getStudentInvoices(student.id).some((invoice) => Number(invoice.balance ?? invoice.amount) > 0 && invoice.dueDate < todayISO);
    if (details) details.innerHTML = `<p><b>Student Name:</b> ${escapeHtml(student.name)}</p><p><b>Class & Section:</b> ${escapeHtml(student.className)}-${escapeHtml(student.section)}</p><p><b>Exam:</b> ${escapeHtml(document.getElementById('hall-ticket-exam')?.value || '')}</p><p><b>Fee Status:</b> ${overdue ? 'Outstanding' : 'Cleared'}</p>`;
    if (eligibility) { eligibility.textContent = overdue ? '❌ Not Eligible · Reason: Outstanding Fee Balance' : '✅ Eligible · Fee Status: Cleared'; eligibility.className = `form-message ${overdue ? 'error' : ''}`; }
    if (generateButton) generateButton.disabled = overdue;
    if (feesButton) feesButton.classList.toggle('hidden', !overdue);
}

function generateHallTicket() {
    const select = document.getElementById('hall-ticket-student');
    const examSelect = document.getElementById('hall-ticket-exam');
    const msg = document.getElementById('hall-ticket-message');
    const exam = examSelect?.value || 'Quarterly';
    const student = getHallTicketStudent();

    if (!student) {
        if (msg) {
            msg.textContent = 'No student record is available for this Hall Ticket.';
            msg.className = 'form-message error';
        }
        return;
    }

    const overdue = getStudentInvoices(student.id).some((invoice) => Number(invoice.balance ?? invoice.amount) > 0 && invoice.dueDate < todayISO);
    if (overdue) { refreshHallTicketEligibility(); return; }
    const content = `<div class="print-document"><h2>${escapeHtml(schoolSettings.name)}</h2><p>Prototype Hall Ticket</p><p><b>Student Name:</b> ${escapeHtml(student.name)}</p><p><b>Admission Number:</b> ${escapeHtml(student.admissionNumber)}</p><p><b>Class & Section:</b> ${escapeHtml(student.className)}-${escapeHtml(student.section)}</p><p><b>Exam:</b> ${escapeHtml(exam)}</p><p><b>School instructions:</b> Bring this prototype document and arrive before the scheduled examination.</p></div>`;
    printStandaloneDocument('Hall Ticket', content);
    if (msg) { msg.textContent = `Hall ticket for ${student.name} generated successfully.`; msg.className = 'form-message'; }
}


// Dropdown Utilities
function populateClassDropdowns() {
    const teacherClassDropdownIds = ['homework-class', 'marks-class-select', 'teacher-quiz-class', 'lesson-class', 'paper-class'];
    const adminClassDropdownIds = ['admission-class', 'fee-class-select', 'teacher-manage-classes'];

    if (currentRole === 'teacher') {
        const teacherClasses = [...new Set(getSubjectAllocationsForTeacher(currentAccount?.teacherId).map((allocation) => allocation.classId))].map((classId) => classes.find((schoolClass) => schoolClass.id === classId)).filter(Boolean);
        teacherClassDropdownIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
                const currentVal = el.value;
                el.innerHTML = teacherClasses.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}-${escapeHtml(c.section)}</option>`).join('');
                if (currentVal && teacherClasses.some((c) => c.id === currentVal)) {
                    el.value = currentVal;
                }
            }
        });

        const updateSubjectsForClass = (classDropdownId, subjectDropdownId) => {
            const classEl = document.getElementById(classDropdownId);
            const subEl = document.getElementById(subjectDropdownId);
            if (!classEl || !subEl) return;
            const selectedClassId = classEl.value || teacherClasses[0]?.id;
            const teacherSubjects = selectedClassId ? getTeacherSubjectsForClass(currentAccount?.teacherId, selectedClassId) : [];
            const currentVal = subEl.value;
            subEl.innerHTML = teacherSubjects.map((s) => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
            if (currentVal && teacherSubjects.includes(currentVal)) {
                subEl.value = currentVal;
            } else if (teacherSubjects.length) {
                subEl.value = teacherSubjects[0];
            }
        };

        const pairs = [
            ['homework-class', 'homework-subject'],
            ['marks-class-select', 'marks-subject-select'],
            ['teacher-quiz-class', 'teacher-quiz-subject'],
            ['lesson-class', 'lesson-subject'],
            ['paper-class', 'paper-subject']
        ];
        pairs.forEach(([cId, sId]) => {
            updateSubjectsForClass(cId, sId);
            const classEl = document.getElementById(cId);
            if (classEl && !classEl.dataset.hasSubjectSync) {
                classEl.dataset.hasSubjectSync = 'true';
                classEl.addEventListener('change', () => updateSubjectsForClass(cId, sId));
            }
        });
    } else {
        const allDropdownIds = [...teacherClassDropdownIds, ...adminClassDropdownIds];
        allDropdownIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el && el.options.length === 0) {
                el.innerHTML = classes.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}-${escapeHtml(c.section)}</option>`).join('');
            }
        });
    }

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

    const accountParentSelect = document.getElementById('account-parent-select');
    if (accountParentSelect && accountParentSelect.options.length === 0) {
        accountParentSelect.innerHTML = parents.map((parent) => `<option value="${parent.id}">${escapeHtml(parent.name)} (${escapeHtml(parent.email)})</option>`).join('');
    }
    const accountTeacherSelect = document.getElementById('account-teacher-select');
    if (accountTeacherSelect && accountTeacherSelect.options.length === 0) {
        const linkedTeacherIds = new Set(accountRecords.filter((account) => account.role === 'teacher').map((account) => account.teacherId));
        accountTeacherSelect.innerHTML = teachers.filter((teacher) => !linkedTeacherIds.has(teacher.id)).map((teacher) => `<option value="${teacher.id}">${escapeHtml(teacher.name)} (${escapeHtml(teacher.email)})</option>`).join('');
    }
    renderAccountRoleSpecificFields();
}

renderAccountRoleSpecificFields();

// School Settings & Data Reset
function loadSettingsForm() {
    const fields = ['name', 'initials', 'tagline', 'principal', 'phone', 'email', 'address', 'color'];
    fields.forEach((k) => {
        const input = document.getElementById(`setting-${k}`);
        if (input) input.value = schoolSettings[k] || '';
    });
    const passInput = document.getElementById('setting-pass-percentage');
    if (passInput) passInput.value = schoolSettings.passPercentage || 35;
}

document.getElementById('settings-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = ['name', 'initials', 'tagline', 'principal', 'phone', 'email', 'address', 'color'];
    fields.forEach((k) => {
        const input = document.getElementById(`setting-${k}`);
        if (input) schoolSettings[k] = input.value.trim();
    });
    schoolSettings.passPercentage = Math.max(1, Math.min(100, Number(document.getElementById('setting-pass-percentage')?.value || 35)));

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
    const sidebar = document.querySelector('.sidebar');
    const open = !sidebar?.classList.contains('mobile-open');
    sidebar?.classList.toggle('mobile-open', open);
    document.getElementById('sidebar-overlay')?.classList.toggle('visible', open);
    document.body.classList.toggle('sidebar-open', open);
    document.getElementById('menu-toggle')?.setAttribute('aria-expanded', String(open));
});

function closeMobileSidebar() {
    document.querySelector('.sidebar')?.classList.remove('mobile-open');
    document.getElementById('sidebar-overlay')?.classList.remove('visible');
    document.body.classList.remove('sidebar-open');
    document.getElementById('menu-toggle')?.setAttribute('aria-expanded', 'false');
}
document.getElementById('sidebar-close')?.addEventListener('click', closeMobileSidebar);
document.getElementById('sidebar-overlay')?.addEventListener('click', closeMobileSidebar);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMobileSidebar(); });

function openHelp() {
    const topics = {
        admin: 'Admin help: add students, create invoices, record payments, publish notices, and generate report cards.',
        teacher: 'Teacher help: take attendance, assign homework, enter marks, review submissions, and message parents.',
        parent: 'Parent help: switch children, view attendance, pay demo fees, download reports, and request meetings.',
        student: 'Student help: submit homework, view marks, take quizzes, use the demo tutor, and borrow resources.'
    };
    const popover = document.getElementById('help-popover');
    const content = document.getElementById('help-popover-content');
    if (!popover || !content) return;
    content.textContent = topics[currentRole] || 'Choose a workspace page to get started.';
    popover.classList.remove('hidden');
}

function closeHelp() {
    document.getElementById('help-popover')?.classList.add('hidden');
}

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
if (typeof renderInteractiveQuestion === 'function') {
    renderInteractiveQuestion();
}
