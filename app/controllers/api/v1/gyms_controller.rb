class Api::V1::GymsController < ApplicationController
  def index
    gyms = Gym.all
    render json: gyms
  end

  def show
    gym = Gym.find(params[:id])
    Rails.logger.info "Gym data: #{gym.attributes.inspect}"
    render json: gym.as_json(only: [ :id, :name, :address, :description, :rating, :latitude, :longitude ])
  end
end
