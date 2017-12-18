from django.db import models

# Create your models here.
class TimeStapmedModel(models.Model):
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # 필드가 아닌 모든 것들
    class Meta:
        abstract = True



class Image(TimeStapmedModel):
    # 필드는 어떤 종류의 정보를 저장하는 지 알려줌
    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()



class Comment(TimeStapmedModel):

    message = models.TextField()
    