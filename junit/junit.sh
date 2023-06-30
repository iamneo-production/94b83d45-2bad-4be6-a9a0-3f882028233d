#!/bin/bash
if [ -d "/home/coder/project/workspace/springapp/" ]
then
    echo "project folder present"
    # checking for src folder
    if [ -d "/home/coder/project/workspace/springapp/src/" ]
    then
        cp -r /home/coder/project/workspace/junit/test /home/coder/project/workspace/springapp/src/;
    cd /home/coder/project/workspace/springapp/ || exit;
    mvn clean test;
    else
        echo "testGetCourseAll FAILED";
        echo "testGetCourseById FAILED";
        echo "testCreateCourse FAILED";
        echo "testGetLessonById FAILED";
        echo "testGetLessonAll FAILED";
        echo "testGetEnrollmentAll FAILED";
        echo "testGetEnrollmentById FAILED";
        echo "testCreateEnrollment FAILED";
        echo "test_case1 FAILED";
        echo "test_case2 FAILED";
   
    fi
else   
        echo "testGetCourseAll FAILED";
        echo "testGetCourseById FAILED";
        echo "testCreateCourse FAILED";
        echo "testGetLessonById FAILED";
        echo "testGetLessonAll FAILED";
        echo "testGetEnrollmentAll FAILED";
        echo "testGetEnrollmentById FAILED";
        echo "testCreateEnrollment FAILED";
        echo "test_case1 FAILED";
        echo "test_case2 FAILED";
fi