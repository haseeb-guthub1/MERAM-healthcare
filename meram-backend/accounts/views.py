# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User



@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {"message": "User registered successfully"},
            status=status.HTTP_201_CREATED
        )
    print(serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def login_user(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        print(token)
        return Response(
            {
                "token": token.key,
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email,
                },
            },
            status=status.HTTP_200_OK,
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(["GET"])
def get_user_by_id(request, id):
    try:
        user = User.objects.get(pk=id)
        return Response(
            {
                "id": user.id,
                "username": user.username,
                "email": user.email,
            },
            status=status.HTTP_200_OK,
        )
    except User.DoesNotExist:
        return Response(
            {"error": "User not found"},
            status=status.HTTP_404_NOT_FOUND,
        )
