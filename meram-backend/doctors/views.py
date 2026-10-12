from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status,permissions
from .models import Doctor
from .serializers import Doctorserializer

@api_view(["GET", "POST"])
@permission_classes([permissions.AllowAny])
def doctor_list(request):
    if request.method == "GET":
        doctors = Doctor.objects.all()
        serializer = Doctorserializer(doctors, many=True)
        return Response(serializer.data)
    
    elif request.method == "POST":
        serializer = Doctorserializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(["GET", "PUT", "DELETE"])
@permission_classes([permissions.AllowAny])   

def doctor_detail(request,id):
    try:
        doctor = Doctor.objects.get(id=id)
    except Doctor.DoesNotExist:
        return Response({"error":"Doctor not found"},status=status.HTTP_404_NOT_FOUND)
    

    if request.method == "GET":
        serializer = Doctorserializer(doctor) 
        return Response(serializer.data)
    
    
    elif request.method == "PUT":
        serializer = Doctorserializer(doctor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    elif request.method == "DELETE":
        doctor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        

    

