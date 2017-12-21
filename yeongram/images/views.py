from rest_framework.views import APIView
from rest_framework.response import Response
from . import models, serializers

# 요청의 접근 방식은 view functions의 두 번째 (명확하게는 첫 번째) attribute를 확인하면됨
# 페이지가 요청될 때, 장고는 해당 요청에 대한 메타데이터를 포함한 http request를 생성한다
class ListAllImages(APIView):
    # 여기서 첫 번째 argument(=request)를 view function
    def get(self, request, format=None):

        print(request.scheme)

        all_images = models.Image.objects.all()
        # 같은 시리얼라이저로 시리얼라이즈한다
        serializer = serializers.ImageSerializer(all_images, many=True)

        return Response(data=serializer.data)


class ListAllCommnets(APIView):

    def get(self, request, format=None):

        user_id = request.user.id

        all_comments = models.Comment.objects.filter(creator=user_id)

        serializer = serializers.CommentSerializer(all_comments, many=True)

        return Response(data=serializer.data)


class ListAllLikes(APIView):

    def get(self, request, format=None):

        all_likes = models.Like.objects.all()

        serializer = serializers.LikeSerializer(all_likes, many=True)

        return Response(data=serializer.data)