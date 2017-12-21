from rest_framework.views import APIView
from rest_framework.response import Response
from . import models, serializers


class ListAllImages(APIView):

    def get(self, request, format=None):

        all_images = models.Image.objects.all()
        # 같은 시리얼라이저로 시리얼라이즈한다
        serializer = serializers.ImageSerializer(all_images, many=True)

        return Response(data=serializer.data)