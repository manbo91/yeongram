from rest_framework import serializers
from . import models

class ImageSerializer(serializers.Serializers):
    
    class Meta:
        models = models.Image
        fields = '__all__'

class CommentSerializer(serializers.Serializers):

    class Meta:
        models = models.Comment
        fields = '__all__'

class LikeSerializer(serializers.Serializers):

    class Meta:
        models = models.Like
        fields = '__all__'