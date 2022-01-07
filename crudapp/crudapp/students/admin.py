from django.contrib import admin

from crudapp.students.models import Student


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    pass