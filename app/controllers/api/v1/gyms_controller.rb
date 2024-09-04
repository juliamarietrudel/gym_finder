class Api::V1::GymsController < ApplicationController
  def index
    gyms = Gym.all
    render json: gyms
  end

  def show
    Rails.logger.info "Params: #{params.inspect}"
    Rails.logger.info "Request headers: #{request.headers.env.select { |k, v| k.start_with?('HTTP_') }.inspect}"
    gym = Gym.find(params[:id])
    render json: gym
  end
end
