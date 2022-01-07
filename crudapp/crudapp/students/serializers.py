from rest_framework import serializers

from crudapp.students.models import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'name', 'email', 'document', 'phone', 'registration_date')