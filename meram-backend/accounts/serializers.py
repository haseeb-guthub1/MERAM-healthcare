# serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    role = serializers.ChoiceField(choices=[('patient', 'Patient'), ('doctor', 'Doctor')])
    phone = serializers.CharField(required=True)
    date_of_birth = serializers.DateField(required=False)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'role', 'phone', 'date_of_birth']

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])  # Hash password
        user.save()
        return user


# serializers.py

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()   # 👈 change from email to username
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get("username")
        password = data.get("password")

        if username and password:
            user = authenticate(username=username, password=password)
            if not user:
                raise serializers.ValidationError("Invalid username or password")
        else:
            raise serializers.ValidationError("Both username and password are required")

        data["user"] = user
        return data



