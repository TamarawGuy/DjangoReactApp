from django.urls import path

from crudapp.students.views import student_list, student_details

urlpatterns = [
    path('', student_list, name="list"),
    path('<int:id>/', student_details, name='details'),
]