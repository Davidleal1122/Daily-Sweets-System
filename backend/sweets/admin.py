from django.contrib import admin

# sweets/admin.py
from django.contrib import admin
from .models import Product

admin.site.register(Product)
