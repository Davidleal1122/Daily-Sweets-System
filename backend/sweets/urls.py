# sweets/urls.py
from django.urls import path
from .views import get_products, get_product, create_order

urlpatterns = [
    path('products/', get_products, name='get_products'),
    path('products/<int:pk>/', get_product, name='get_product'),
    path('create-order/', create_order, name='create_order'),
]
