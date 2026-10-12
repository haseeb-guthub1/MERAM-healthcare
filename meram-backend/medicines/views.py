from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Medicine
from .serializers import medicineserializer

@api_view (["GET","POST"])
@permission_classes([permissions.AllowAny])

def  medicine_list(request):
    if request.method == "GET":
        medicines = Medicine.objects.all()
        serializer=medicineserializer(medicines, many=True)
        return Response(serializer.data)
    
    
    elif request.method == "POST":
        serializer = medicineserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET","PUT","DELETE"])
@permission_classes([permissions.AllowAny])

def medicine_detail(request,id):
    try:
        medicine = Medicine.objects.get(id=id)
    except Medicine.DoesNotExist:
        return Response ({"error":"medicine not found"}, status=status.HTTP_400_BAD_REQUEST)    

    if request.method == "GET":
        serializer = medicineserializer(medicine)
        return Response(serializer.data)
    

    elif request.method == "PUT":
        serializer = medicineserializer(medicine, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
    

    elif request.method == "DELETE":
        medicine.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


